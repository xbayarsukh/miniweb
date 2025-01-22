<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function create2(): Response
    {
        $request = Request::capture(); // Capture the current request instance
        $host = $request->getHost(); // Get the full host (e.g., subdomain.example.com)
        $subdomain = explode('.', $host)[0]; // Extract the subdomain (e.g., subdomain)
        $user = User::where('subdomain', $subdomain)->first();
       
        if (!isset($user) || !isset($user->template)) {
            abort(404, 'Template not found');
        }

        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    public function store2(LoginRequest $request): RedirectResponse
    {
        $host = $request->getHost(); // Get the full host (e.g., subdomain.example.com)
        $subdomain = explode('.', $host)[0]; // Extract the subdomain (e.g., subdomain)
        $user = User::where('subdomain', $subdomain)->first();
        if (!isset($user) || !isset($user->template) || $user->subdomain != $subdomain) {
            return back()->with('error', 'user not found');
        }else{
            $request->authenticate();
            $request->session()->regenerate();
            return redirect()->intended(route('dashboard', absolute: false));
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
