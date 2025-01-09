<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Faq;

class FaqController extends Controller
{
    public function index() {
        $user = Auth::user();
        $faqs = $user->faqs;
        // return $faqs;
        return Inertia::render('Admin/Faq/Faq', ['faqs' => $faqs]);
    }

    public function create() {
        return Inertia::render('Admin/Faq/CreateAndEdit', ['singleFaq' => null]);
    }

    public function store(Request $request) {
        $user = Auth::user();
        $faq = new Faq;
        $faq->title = $request->title;
        $faq->content = $request->content;
        $faq->user_id = $user->id;
        $faq->save();

        return redirect()->route('admin.faqs')->with('success', 'portfolio created successfully!');
    }

    public function edit($id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $faq = Faq::where('id', $id)->where('user_id', $user->id)->first();
        if ($faq) {
            return Inertia::render('Admin/Faq/CreateAndEdit', ['singleFaq' => $faq]);
        }else{
            return redirect()->route('admin.faqs')->with('success', 'Not found this portfolio maybe deleted');
        }
    }

    public function update(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $faq = Faq::where('id', $id)->where('user_id', $user->id)->first();
        if ($faq) {
            $faq->title = $request->title;
            $faq->content = $request->content;
            $faq->save();
            return redirect()->route('admin.faqs')->with('success', 'portfolio created successfully!');
        }else{
            return redirect()->route('admin.faqs')->with('success', 'Not found this portfolio maybe deleted');
        }
    }

    public function destroy(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $faq = Faq::where('id', $id)->where('user_id', $user->id)->first();
        if ($faq) {
            $faq->delete();
            return redirect()->route('admin.faqs')->with('success', 'portfolio delete successfully!');
        }else{
            return redirect()->route('admin.faqs')->with('success', 'Not found this portfolio maybe deleted');
        }
    }
}