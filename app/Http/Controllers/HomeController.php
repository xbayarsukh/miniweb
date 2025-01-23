<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Template;
use App\Models\Package;

class HomeController extends Controller
{
    public function index(){
        
        $host = Request::getHost();
        $subdomain = explode('.', $host)[0];
        $user = User::where('subdomain', $subdomain)->first();
        $faqs = $user->faqs;
        $general = $user->general;
        $package = $user->package;
        $partners = $user->partners;
        $portfolios = $user->portfolios;
        $posts = $user->posts;
        $services = $user->services;
       
        if (!isset($user) || !isset($user->template)) {
            abort(404, 'Template not found');
        }
        
        $template = $user->template;
    
        if ($user->expire_date > now()) {
            return Inertia::render("Templates/Template$template/Home", [
                'headTitle' => $user->subdomain,
                'faqs' => $faqs,
                'general' => $user->general,
                'package' => $package,
                'partners' => $partners,
                'portfolios' => $portfolios,
                'posts' => $posts,
                'services' => $services,
            ]);
        }else{
            return view('errors.expire');
        }
    }

    public function home (){
        $user = User::where('id', 1)->first();
        $faqs = $user->faqs;
        $general = $user->general;
        $packages = Package::orderBY('id', 'desc')->get();
        $partners = $user->partners;
        $portfolios = $user->portfolios;
        $posts = $user->posts;
        $services = $user->services;
        $userTemp = $user->selected_template;
        $templates = Template::where('frontend', '!=', 0)->orderBy('frontend', 'asc')->get();
       
        if (!isset($user) || !isset($user->template)) {
            abort(404, 'Template not found');
        }
        
        $template = $user->template;
        // return $general;
        return Inertia::render("Templates/Template$template/Home", [
            'headTitle' => null,
            'user' => $user,
            'faqs' => $faqs,
            'general' => $general,
            'packages' => $packages,
            'partners' => $partners,
            'portfolios' => $portfolios,
            'posts' => $posts,
            'services' => $services,
            'userTemp' => $userTemp,
            'templates' => $templates,
        ]);
    }
}