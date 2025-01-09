<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Partner;

class PartnerController extends Controller
{
    public function index() {
        $user = Auth::user();
        $partners = $user->partners;
        // return $partners;
        return Inertia::render('Admin/Partner/Partner', ['partners' => $partners]);
    }

    public function create() {
        return Inertia::render('Admin/Partner/CreateAndEdit', ['singleParner' => null]);
    }

    public function store(Request $request) {
        $user = Auth::user();
        $partner = new Partner;
        $partner->title = $request->title;
        $partner->content = $request->content;
        $partner->link = $request->link;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('uploads/partners/'), $imageName);
            $partner->image = 'uploads/partners/' . $imageName;
        }
        $partner->user_id = $user->id;
        $partner->save();

        return redirect()->route('admin.partners')->with('success', 'portfolio created successfully!');
    }

    public function edit($id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $partner = Partner::where('id', $id)->where('user_id', $user->id)->first();
        if ($partner) {
            return Inertia::render('Admin/Partner/CreateAndEdit', ['singleParner' => $partner]);
        }else{
            return redirect()->route('admin.partners')->with('success', 'Not found this portfolio maybe deleted');
        }
    }

    public function update(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $partner = Partner::where('id', $id)->where('user_id', $user->id)->first();
        if ($partner) {
            $partner->title = $request->title;
            $partner->content = $request->content;
            $partner->link = $request->link;
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time().'.'.$image->getClientOriginalExtension();
                $image->move(public_path('uploads/partners/'), $imageName);
                $partner->image = 'uploads/partners/' . $imageName;
            }
            $partner->save();
            return redirect()->route('admin.partners')->with('success', 'portfolio created successfully!');
        }else{
            return redirect()->route('admin.partners')->with('success', 'Not found this portfolio maybe deleted');
        }
    }

    public function destroy(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $partner = Partner::where('id', $id)->where('user_id', $user->id)->first();
        if ($partner) {
            $partner->delete();
            return redirect()->route('admin.partners')->with('success', 'portfolio delete successfully!');
        }else{
            return redirect()->route('admin.partners')->with('success', 'Not found this portfolio maybe deleted');
        }
    }
}