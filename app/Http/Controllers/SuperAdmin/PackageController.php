<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Package;

class PackageController extends Controller
{
    public function index() {
        $packages = Package::orderBy('id', 'DESC')->get();
        return Inertia::render('SuperAdmin/Package/Package', ['packages' => $packages]);
    }
    public function create(){

        return Inertia::render('SuperAdmin/Package/CreateAndEdit', ['pack' => null]);
    }
    public function store(Request $request){
        $package = new Package;
        $package->title = $request->title;
        $package->price = $request->price;
        $package->month = $request->month;
        $package->day = $request->day;
        $package->body = $request->body;
        
        $package->save();
        return redirect()->route('admin.package')->with('success', 'portfolio created successfully!');
    }
    public function edit($id){
        $package = Package::find($id);
        return Inertia::render('SuperAdmin/Package/CreateAndEdit', ['pack' => $package]);
    }
    public function update(Request $request, $id){
        
        $package = Package::find($id);
        if ($package) {
            $package->title = $request->title;
            $package->price = $request->price;
            $package->month = $request->month;
            $package->day = $request->day;
            $package->body = $request->body;
            
            $package->save();
            return redirect()->route('admin.package')->with('success', 'portfolio created successfully!');
        }else{
            return redirect()->route('admin.package')->with('success', 'Not found this portfolio maybe deleted');
        }
    }
}