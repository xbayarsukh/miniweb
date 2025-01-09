<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\GeneralSetting;
use Illuminate\Support\Facades\Storage;

class AboutController extends Controller
{
    public function index(Request $request) {
        $user = Auth::user();
        $general = $user->general;
        $templates = $user->selected_template;
        return Inertia::render('Admin/About/About',['about' => $general, 'templates' => $templates]);
    }

    public function update(Request $request) {
        $user = Auth::user();
        // Find or create the general settings record
        $general = GeneralSetting::where('user_id', $user->id)->first();
        $general->overview = $request['overview'];

        // Handle favicon upload
        if ($request->hasFile('banner')) {
            $banner = $request->file('banner');
            $imageName = time().'.'.$banner->getClientOriginalExtension();
            $banner->move(public_path('uploads/banners/'), $imageName);
            $general->banner = 'uploads/banners/' . $imageName;
        }
    
        // Save the record
        $general->save();
    
        return redirect()->route('admin.about')->with('success', 'About updated successfully!');
    }
    
}