<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Template;

class TemplateController extends Controller
{
    public function index() {
        $user = Auth::user();
        $templates = Template::orderBy('id', 'DESC')->get();
        return Inertia::render('SuperAdmin/Template/Template', ['templates' => $templates]);
    }
}