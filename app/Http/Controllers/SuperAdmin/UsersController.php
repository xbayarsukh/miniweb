<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;

class UsersController extends Controller
{
    public function index() {
        $users = User::where('id', '!=', 1)->orderBy('id', 'DESC')->get();
        return Inertia::render('SuperAdmin/Users/Users', ['users' => $users]);
    }
}