<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;

class UsersController extends Controller
{
    public function index() {
        $users = User::where('id', '!=', 1)->orderBy('id', 'DESC')->get();
        return Inertia::render('SuperAdmin/Users/Users', ['users' => $users]);
    }
    // public function create(){

    //     return Inertia::render('SuperAdmin/Users/CreateAndEdit', ['users' => null]);
    // }
    // public function store(Request $request){
    //     $user = new User;
    //     $user->name = $request->name;
    //     $user->subdomain = $request->subdomain;
    //     $user->template = $request->template;
    //     $user->phone = $request->phone;
    //     $user->expire_date = $request->expire_date;
    //     $user->email = $request->email;

        
    //     $user->save();
    //     return redirect()->route('admin.user')->with('success', 'portfolio created successfully!');
    // }
    public function edit($id){
        $user = User::find($id);
        return Inertia::render('SuperAdmin/Users/CreateAndEdit', ['user' => $user]);
    }
    public function update(Request $request, $id){
        
        $user = User::find($id);
        if ($user) {
            $user->name = $request->name;
            $user->subdomain = $request->subdomain;
            $user->template = $request->template;
            $user->phone = $request->phone;
            $user->expire_date = $request->expire_date;
            $user->email = $request->email;
            
            
            
            
            $user->save();
            return redirect()->route('admin.users')->with('success', 'portfolio created successfully!');
        }else{
            return redirect()->route('admin.users')->with('success', 'Not found this portfolio maybe deleted');
        }
    }
}