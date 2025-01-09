<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Order;

class OrderController extends Controller
{
    public function index() {
        $user = Auth::user();
        $orders = Order::with('user')->where('user_id', $user->id)->orderBy('id', 'DESC')->get();
        // return $faqs;
        return Inertia::render('Admin/Order/Order', ['orders' => $orders]);
    }

    public function edit($id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $order = Order::where('order_no', $id)->where('user_id', $user->id)->first();
        if ($order) {
            return Inertia::render('Admin/Order/Show', ['singleOrder' => $order]);
        }else{
            return redirect()->route('admin.orders')->with('success', 'Not found this portfolio maybe deleted');
        }
    }

    public function update(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $order = Order::where('order_no', $id)->where('user_id', $user->id)->first();
        if ($order) {
            $order->title = $request->title;
            $order->content = $request->content;
            $order->save();
            return redirect()->route('admin.orders')->with('success', 'portfolio created successfully!');
        }else{
            return redirect()->route('admin.orders')->with('success', 'Not found this portfolio maybe deleted');
        }
    }
}