<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Order;

class BillingController extends Controller
{
    public function index() {
        $orders = Order::join('users', 'users.id', 'orders.user_id')->join('general_settings', 'general_settings.user_id', 'users.id')->orderBy('orders.id', 'DESC')->select('orders.*', 'users.name')->paginate(10);
        return Inertia::render('SuperAdmin/Billing/Billing', ['orders' => $orders, 'pagination' => $orders->onEachSide(1)]);
    }
}