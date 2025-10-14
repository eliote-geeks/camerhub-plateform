<?php

use App\Http\Controllers\CasesController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/services', fn () => Inertia::render('Services'))->name('services');
Route::get('/method', fn () => Inertia::render('Method'))->name('method');
Route::get('/cases', [CasesController::class, 'index'])->name('cases');
Route::get('/cases/{slug}', [CasesController::class, 'show'])->name('cases.show');
Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');

Route::post('/contact/submit', [ContactController::class, 'submit'])->name('contact.submit');
Route::post('/contact/chat', [ContactController::class, 'chat'])->name('contact.chat');
