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
    public function create(){
        $user = Auth::user();
        return Inertia::render('SuperAdmin/Template/CreateAndEdit', ['template' => null]);
    }
    public function store(Request $request){
        $user = Auth::user();
        $template = new Template;
        $template->name = $request->name;
        $template->frontend = $request->frontend;
        $template->banner = $request->banner;
        $template->about_overview = $request->about_overview;
        $template->about_background = $request->about_background;
        $template->partners = $request->partners;
        $template->partners_background = $request->partners_background;
        $template->portfolios = $request->portfolios;
        $template->portfolios_background = $request->portfolios_background;
        $template->posts = $request->posts;
        $template->posts_background = $request->posts_background;
        $template->services = $request->services;
        $template->services_background = $request->services_background;
        if ($request->hasFile('banner')) {
            $image = $request->file('banner');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('uploads/banners/'), $imageName);
            $template->banner = 'uploads/banners/' . $imageName;
        }
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('uploads/templates/'), $imageName);
            $template->banner = 'uploads/templates/' . $imageName;
        }

        if ($request->hasFile('tfile')) {
            $image = $request->file('tfile');
            $imageName = 'Home.'.$image->getClientOriginalExtension();
            $image->move(resource_path('js/Pages/Templates/Template'.$request->frontend.'/'), $imageName);
        }

        $template->save();
        return Redirect::route('admin.template')->with('success', 'Template created successfully!');
    }
    public function edit($id) {
        $user = Auth::user();
        $template = Template::find($id);
        return Inertia::render('SuperAdmin/Template/CreateAndEdit', ['template' => $template,
        ]);
    }
    public function update(Request $request, $id) {
        $user = Auth::user();
        $template = Template::find($id);
        $template->name = $request->name;
        $template->frontend = $request->frontend;
        if ($request->hasFile('banner')) {
            $image = $request->file('banner');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('uploads/banners/'), $imageName);
            $template->banner = 'uploads/banners/' . $imageName;
        }
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('uploads/templates/'), $imageName);
            $template->image = 'uploads/templates/' . $imageName;
        }
        
        if ($request->hasFile('tfile')) {
            $image = $request->file('tfile');
            $imageName = 'Home.'.$image->getClientOriginalExtension();
            $image->move(resource_path('js/Pages/Templates/Template'.$request->frontend.'/'), $imageName);
            $template->tfile = 'js/Pages/Templates/Template'.$request->frontend.'/'.$imageName;
        }
        
        $template->about_overview = $request->about_overview;
        $template->about_background = $request->about_background;
        $template->partners = $request->partners;
        $template->partners_background = $request->partners_background;
        $template->portfolios = $request->portfolios;
        $template->portfolios_background = $request->portfolios_background;
        $template->posts = $request->posts;
        $template->posts_background = $request->posts_background;
        $template->services = $request->services;
        $template->services_background = $request->services_background;
        $template->services = $request->services;
        $template->save();
        return Redirect::route('admin.template')->with('success', 'Template created successfully!');
    }
}