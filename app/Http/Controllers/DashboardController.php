<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\User;
use App\Models\Order;
use App\Models\Post;
use App\Models\Service;
use App\Models\Portfolio;

class DashboardController extends Controller
{
    public function index() {
        $users = User::where('id', '!=', 1)->orderBy('id', 'DESC')->get();
        $orders1 = Order::whereYear('created_at' , Carbon::now()->subMonth()->format('y'))->whereMonth('created_at' , Carbon::now()->subMonth()->format('m'))->get();
        $orders2 = Order::whereYear('created_at' , Carbon::now()->subMonth()->format('y'))->whereMonth('created_at' , Carbon::now(1)->subMonth()->format('m'))->get();
        $orders3 = Order::whereYear('created_at' , Carbon::now()->subMonth()->format('y'))->whereMonth('created_at' , Carbon::now(2)->subMonth()->format('m'))->get();
        $orders4 = Order::whereYear('created_at' , Carbon::now()->subMonth()->format('y'))->whereMonth('created_at' , Carbon::now(3)->subMonth()->format('m'))->get();
        $orders5 = Order::whereYear('created_at' , Carbon::now()->subMonth()->format('y'))->whereMonth('created_at' , Carbon::now(4)->subMonth()->format('m'))->get();
        $ordersToday = Order::whereDate('created_at', Carbon::today())->get();
        $newUser = User::whereDate('created_at', Carbon::today())->get();
        $orders = Order::join('users', 'users.id', 'orders.user_id')->join('general_settings', 'general_settings.user_id', 'users.id')->orderBy('orders.id', 'DESC')->select('orders.*', 'users.name')->limit(10)->get();
        $posts = Post::join('users', 'users.id', 'posts.user_id')->orderBy('posts.user_id', 'DESC')->get();
        $services = Service::join('users', 'users.id', 'services.user_id')->orderBy('services.user_id', 'DESC')->get();
        $portfolios = Portfolio::join('users', 'users.id', 'portfolios.user_id')->orderBy('portfolios.user_id', 'DESC')->get();
        $servicesToday = Service::join('users', 'users.id', '=', 'services.user_id')->whereDate('services.created_at', Carbon::today())->orderBy('services.user_id', 'DESC')->select('services.*', 'users.*')->get();
        return Inertia::render('Dashboard',['users' => $users, 'orders1'=> $orders1,'orders2'=> $orders2,
        'orders3'=> $orders3,'orders4'=> $orders4,'orders5'=> $orders5, 'ordersToday'=>$ordersToday, 'orders'=>$orders, 
        'newUser'=> $newUser, 'posts'=>$posts, 'services' => $services, 'portfolios'=>$portfolios, 'servicesToday'=> $servicesToday]);
    }

    public function users() {
        $users = User::where('id', '!=', 1)->orderBy('id', 'DESC')->get();
        return Inertia::render('SuperAdmin/Users/Users', ['users' => $users]);
    }

    public function billing() {
        $orders = Order::join('users', 'users.id', 'orders.user_id')->join('general_settings', 'general_settings.user_id', 'users.id')->orderBy('orders.id', 'DESC')->paginate(10);
        return Inertia::render('SuperAdmin/Billing/Billing', ['orders' => $orders, 'pagination' => $orders->onEachSide(1)]);
    }

    public function system_setting() {
        return Inertia::render('SuperAdmin/Settings/Settings');
    }

    public function package() {
        return Inertia::render('SuperAdmin/Package/Package');
    }
}