<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CasesController extends Controller
{
    /**
     * @var array<int, array<string, mixed>>
     */
    protected array $cases;

    public function __construct()
    {
        $path = resource_path('data/cases.json');

        try {
            $raw = File::get($path);
            $decoded = json_decode($raw, true, 512, JSON_THROW_ON_ERROR);
        } catch (\Throwable $exception) {
            Log::error('Unable to load case studies dataset', ['exception' => $exception]);
            $decoded = [];
        }

        $this->cases = collect($decoded)
            ->map(function (array $case) {
                $case['slug'] ??= Str::slug($case['title'] ?? 'case');
                $case['stack'] = array_values($case['stack'] ?? []);
                $case['solution'] = array_values($case['solution'] ?? []);
                $case['results'] = array_values($case['results'] ?? []);
                $case['timeline'] = array_values($case['timeline'] ?? []);

                return $case;
            })
            ->values()
            ->all();
    }

    public function index(): Response
    {
        return Inertia::render('Cases', [
            'cases' => $this->cases,
        ]);
    }

    public function show(string $slug): Response
    {
        $case = collect($this->cases)->firstWhere('slug', $slug);

        abort_if(!$case, 404);

        $related = collect($this->cases)
            ->where('slug', '!=', $slug)
            ->take(3)
            ->values()
            ->all();

        return Inertia::render('Cases/Show', [
            'caseStudy' => $case,
            'related' => $related,
        ]);
    }
}
