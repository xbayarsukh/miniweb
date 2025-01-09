<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        $user = Auth::user();
        $posts = $user->posts;
        // return $posts;
        return Inertia::render('Admin/Post/Post', ['posts' => $posts]);
    }

    public function create() {
        return Inertia::render('Admin/Post/CreateAndEdit', ['singlePost' => null]);
    }

    public function store(Request $request) {
        $user = Auth::user();
        $post = new Post;
        $post->title = $request->title;
        $post->subtitle = $request->subtitle;
        $post->content = $request->content;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('uploads/posts/'), $imageName);
            $post->image = 'uploads/posts/' . $imageName;
        }
        $post->user_id = $user->id;
        $post->save();

        return redirect()->route('admin.posts')->with('success', 'Post created successfully!');
    }

    public function edit($id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $post = Post::where('id', $id)->where('user_id', $user->id)->first();
        if ($post) {
            return Inertia::render('Admin/Post/CreateAndEdit', ['singlePost' => $post]);
        }else{
            return redirect()->route('admin.posts')->with('success', 'Not found this post maybe deleted');
        }
    }

    public function update(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $post = Post::where('id', $id)->where('user_id', $user->id)->first();
        if ($post) {
            $post->title = $request->title;
            $post->subtitle = $request->subtitle;
            $post->content = $request->content;
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time().'.'.$image->getClientOriginalExtension();
                $image->move(public_path('uploads/posts/'), $imageName);
                $post->image = 'uploads/posts/' . $imageName;
            }
            $post->save();
            return redirect()->route('admin.posts')->with('success', 'Post created successfully!');
        }else{
            return redirect()->route('admin.posts')->with('success', 'Not found this post maybe deleted');
        }
    }

    public function destroy(Request $request, $id, $id2 = null) {
        $user = Auth::user();
        if ($user->subdomain == $id) {
            $id = $id2;
        }
        $post = Post::where('id', $id)->where('user_id', $user->id)->first();
        if ($post) {
            $post->delete();
            return redirect()->route('admin.posts')->with('success', 'Post delete successfully!');
        }else{
            return redirect()->route('admin.posts')->with('success', 'Not found this post maybe deleted');
        }
    }
}