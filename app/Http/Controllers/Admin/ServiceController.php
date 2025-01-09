<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index() {
        $user = Auth::user();
        $services = $user->services;
        // return $services;
        return Inertia::render('Admin/Service/Service', ['services' => $services]);
    }

    public function create() {
        $user = Auth::user();
        $templates = $user->selected_template;
        return Inertia::render('Admin/Service/CreateAndEdit', ['singleService' => null, 'templates' => $templates]);
    }

    public function store(Request $request) {
        $user = Auth::user();
        $service = new Service;
        $service->title = $request->title;
        $service->subtitle = $request->subtitle;
        $service->content = $request->content;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('uploads/services/'), $imageName);
            $service->image = 'uploads/services/' . $imageName;
        }
        $service->user_id = $user->id;
        $service->save();

        return redirect()->route('admin.services')->with('success', 'Post created successfully!');
    }

    public function edit($id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $templates = $user->selected_template;
        $service = Service::where('id', $id)->where('user_id', $user->id)->first();
        if ($service) {
            return Inertia::render('Admin/Service/CreateAndEdit', ['singleService' => $service, 'templates' => $templates]);
        }else{
            return redirect()->route('admin.services')->with('success', 'Not found this post maybe deleted');
        }
    }

    public function update(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $service = Service::where('id', $id)->where('user_id', $user->id)->first();
        if ($service) {
            $service->title = $request->title;
            $service->subtitle = $request->subtitle;
            $service->content = $request->content;
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time().'.'.$image->getClientOriginalExtension();
                $image->move(public_path('uploads/services/'), $imageName);
                $service->image = 'uploads/services/' . $imageName;
            }
            $service->save();
            return redirect()->route('admin.services')->with('success', 'Post created successfully!');
        }else{
            return redirect()->route('admin.services')->with('success', 'Not found this post maybe deleted');
        }
    }

    public function destroy(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $service = Service::where('id', $id)->where('user_id', $user->id)->first();
        if ($service) {
            $service->delete();
            return redirect()->route('admin.services')->with('success', 'Post delete successfully!');
        }else{
            return redirect()->route('admin.services')->with('success', 'Not found this post maybe deleted');
        }
    }
}