<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function index() {
        $user = Auth::user();
        $portfolios = $user->portfolios;
        // return $portfolios;
        return Inertia::render('Admin/Portfolio/Portfolio', ['portfolios' => $portfolios]);
    }

    public function create() {
        return Inertia::render('Admin/Portfolio/CreateAndEdit', ['portfolios' => null]);
    }

    public function store(Request $request) {
        $user = Auth::user();
        $portfolio = new Portfolio;
        $portfolio->title = $request->title;
        $portfolio->content = $request->content;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('uploads/portfolios/'), $imageName);
            $portfolio->image = 'uploads/portfolios/' . $imageName;
        }
        $portfolio->user_id = $user->id;
        $portfolio->save();

        return redirect()->route('admin.portfolios')->with('success', 'portfolio created successfully!');
    }

    public function edit($id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $portfolio = Portfolio::where('id', $id)->where('user_id', $user->id)->first();
        if ($portfolio) {
            return Inertia::render('Admin/Portfolio/CreateAndEdit', ['portfolios' => $portfolio]);
        }else{
            return redirect()->route('admin.portfolios')->with('success', 'Not found this portfolio maybe deleted');
        }
        // return $portfolio;
    }

    public function update(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $portfolio = Portfolio::where('id', $id)->where('user_id', $user->id)->first();
        if ($portfolio) {
            $portfolio->title = $request->title;
            $portfolio->content = $request->content;
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time().'.'.$image->getClientOriginalExtension();
                $image->move(public_path('uploads/portfolios/'), $imageName);
                $portfolio->image = 'uploads/portfolios/' . $imageName;
            }
            $portfolio->save();
            return redirect()->route('admin.portfolios')->with('success', 'portfolio created successfully!');
        }else{
            return redirect()->route('admin.portfolios')->with('success', 'Not found this portfolio maybe deleted');
        }
    }

    public function destroy(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $portfolio = Portfolio::where('id', $id)->where('user_id', $user->id)->first();
        if ($portfolio) {
            $portfolio->delete();
            return redirect()->route('admin.portfolios')->with('success', 'portfolio delete successfully!');
        }else{
            return redirect()->route('admin.portfolios')->with('success', 'Not found this portfolio maybe deleted');
        }
    }
}