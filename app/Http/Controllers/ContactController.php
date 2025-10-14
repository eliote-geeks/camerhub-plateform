<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class ContactController extends Controller
{
    public function submit(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:190'],
            'company' => ['nullable', 'string', 'max:160'],
            'project_scope' => ['required', 'string', 'max:160'],
            'message' => ['required', 'string', 'max:1200'],
        ]);

        $endpoint = config('services.n8n.contact_webhook');

        if (!$endpoint) {
            throw ValidationException::withMessages([
                'general' => 'Le service de contact est temporairement indisponible. Merci de réessayer plus tard.',
            ]);
        }

        $payload = [
            'full_name' => $validated['full_name'],
            'email' => $validated['email'],
            'company' => $validated['company'] ?? null,
            'project_scope' => $validated['project_scope'],
            'message' => $validated['message'],
            'meta' => [
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'referer' => $request->headers->get('referer'),
            ],
        ];

        try {
            $response = Http::timeout(12)->asJson()->post($endpoint, $payload);
        } catch (\Throwable $exception) {
            Log::warning('Contact webhook unreachable', ['exception' => $exception]);

            throw ValidationException::withMessages([
                'general' => 'Impossible de transmettre votre message pour le moment. Merci de réessayer dans quelques minutes.',
            ]);
        }

        if (!$response->successful()) {
            Log::warning('Contact webhook returned an error', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            throw ValidationException::withMessages([
                'general' => 'Nous n’avons pas pu enregistrer votre demande. Merci de réessayer plus tard.',
            ]);
        }

        return back()->with('success', 'Merci ! Ton message a été bien transmis — on revient vers toi sous 24h.');
    }

    public function chat(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'message' => ['required', 'string', 'max:600'],
            'history' => ['sometimes', 'array', 'max:12'],
            'history.*.role' => ['required_with:history', 'string'],
            'history.*.content' => ['required_with:history', 'string'],
        ]);

        $endpoint = config('services.n8n.chat_webhook');

        if (!$endpoint) {
            return response()->json([
                'error' => 'Le copilote IA est indisponible pour le moment.',
            ], 503);
        }

        $payload = [
            'message' => $validated['message'],
            'history' => $validated['history'] ?? [],
            'meta' => [
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ],
        ];

        try {
            $response = Http::timeout(20)->asJson()->post($endpoint, $payload);
        } catch (\Throwable $exception) {
            Log::warning('Chat webhook unreachable', ['exception' => $exception]);

            return response()->json([
                'error' => 'Le copilote IA ne répond pas pour le moment. Réessayez un peu plus tard.',
            ], 503);
        }

        if (!$response->successful()) {
            Log::warning('Chat webhook returned an error', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            return response()->json([
                'error' => 'Le copilote IA ne répond pas pour le moment. Réessayez un peu plus tard.',
            ], 502);
        }

        return response()->json([
            'reply' => data_get($response->json(), 'reply'),
            'context' => data_get($response->json(), 'context'),
        ]);
    }
}
