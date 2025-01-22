<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\GeneralSetting;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function index() {
        $users = User::where('id', '!=', 1)->orderBy('id', 'DESC')->get();
        return Inertia::render('SuperAdmin/Users/Users', ['users' => $users]);
    }
    public function createUser(Request $request) {
        $slug = preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '', strtolower($this->transliterateMongolianToEnglish($request->subdomain))));
        // return $request;
        $user = new User;
      
        $user->name = $request->name;
        $user->subdomain = $slug;
        $user->template = 1;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        
        if($user->save()){

        }
        return redirect()->to("http://$user->subdomain.localhost:8000/login")->with('success', 'portfolio created successfully!');      
    }
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

    
    function transliterateMongolianToEnglish($str) {
        $mongolianMap = [
            'А' => 'a', 'Б' => 'b', 'В' => 'v', 'Г' => 'g', 'Д' => 'd', 'Е' => 'ye', 'Ё' => 'yo', 'Ж' => 'zh',
            'З' => 'z', 'И' => 'i', 'Й' => 'i', 'К' => 'k', 'Л' => 'l', 'М' => 'm', 'Н' => 'n', 'О' => 'o',
            'Ө' => 'o', 'П' => 'p', 'Р' => 'r', 'С' => 's', 'Т' => 't', 'У' => 'u', 'Ү' => 'u', 'Ф' => 'f',
            'Х' => 'h', 'Ц' => 'ts', 'Ч' => 'ch', 'Ш' => 'sh', 'Щ' => 'sch', 'Ъ' => 'i', 'Ы' => 'y', 'Ь' => 'i',
            'Э' => 'e', 'Ю' => 'yu', 'Я' => 'ya',
            'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'ye', 'ё' => 'yo', 'ж' => 'zh',
            'з' => 'z', 'и' => 'i', 'й' => 'i', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o',
            'ө' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ү' => 'u', 'ф' => 'f',
            'х' => 'h', 'ц' => 'ts', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 'ъ' => 'i', 'ы' => 'y', 'ь' => 'i',
            'э' => 'e', 'ю' => 'yu', 'я' => 'ya',
        ];
        
        return strtr($str, $mongolianMap);
    }
}