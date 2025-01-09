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

class LabelController extends Controller
{
    public function index(Request $request) {
        $user = Auth::user();
        $general = $user->general;
        $templates = $user->selected_template;
        return Inertia::render('Admin/Label/Label',['about' => $general, 'templates' => $templates]);
    }

    public function update(Request $request) {
        $user = Auth::user();

        $general = GeneralSetting::where('user_id', $user->id)->first();
        // Update title and overview
        $general->title = $request['title'];
    
        // Handle logo upload
        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $imageName = time().'.'.$logo->getClientOriginalExtension();
            $logo->move(public_path('uploads/logos/'), $imageName);
            $general->logo = 'uploads/logos/' . $imageName;
        }
    
        // Handle favicon upload
        if ($request->hasFile('favicon')) {
            $favicon = $request->file('favicon');
            $imageName = time().'.'.$favicon->getClientOriginalExtension();
            $favicon->move(public_path('uploads/favicons/'), $imageName);
            $general->favicon = 'uploads/favicons/' . $imageName;
        }

        $options = [
            "about_title" => isset($request->about_title) ? $request->about_title : json_decode($general->options)['about_title'],
            "about_desc" => isset($request->about_desc) ? $request->about_desc : json_decode($general->options)['about_desc'],
            "news_title" => isset($request->news_title) ? $request->news_title : json_decode($general->options)['news_title'],
            "news_desc" => isset($request->news_desc) ? $request->news_desc : json_decode($general->options)['news_desc'],
            "service_title" => isset($request->service_title) ? $request->service_title : json_decode($general->options)['service_title'],
            "service_desc" => isset($request->service_desc) ? $request->service_desc : json_decode($general->options)['service_desc'],
            "portfolio_title" => isset($request->portfolio_title) ? $request->portfolio_title : json_decode($general->options)['portfolio_title'],
            "portfolio_desc" => isset($request->portfolio_desc) ? $request->portfolio_desc : json_decode($general->options)['portfolio_desc'],
            "partner_title" => isset($request->partner_title) ? $request->partner_title : json_decode($general->options)['partner_title'],
            "partner_desc" => isset($request->partner_desc) ? $request->partner_desc : json_decode($general->options)['partner_desc'],
            "faq_title" => isset($request->faq_title) ? $request->faq_title : json_decode($general->options)['faq_title'],
            "faq_desc" => isset($request->faq_desc) ? $request->faq_desc : json_decode($general->options)['faq_desc'],
        ];

        $general->options = json_encode($options);
    
        // Save the record
        $general->save();
    
        return redirect()->route('admin.labels')->with('success', 'Post created successfully!');
    }
    
}