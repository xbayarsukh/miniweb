<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;

class DashboardController extends Controller
{
    public function index() {
        $users = User::where('id', '!=', 1)->orderBy('id', 'DESC')->get();
        return Inertia::render('Dashboard',['users' => $users]);
    }

    public function users() {
        $users = User::where('id', '!=', 1)->orderBy('id', 'DESC')->get();
        return Inertia::render('SuperAdmin/Users/Users', ['users' => $users]);
    }

    public function billing() {
        return Inertia::render('SuperAdmin/Billing/Billing');
    }

    public function system_setting() {
        return Inertia::render('SuperAdmin/Settings/Settings');
    }

    public function package() {
        return Inertia::render('SuperAdmin/Package/Package');
    }
}