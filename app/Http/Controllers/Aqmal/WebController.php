<?php

namespace App\Http\Controllers\Aqmal;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class WebController extends Controller
{
    public function index()
    {
        return 'ok index';
    }

    public function getAllPost()
    {
        $allPost = Post::latest()->get();

        return response()->json($allPost, 200);
    }

    public function getPopularPost()
    {
        $allPost = Post::orderBy('view', 'desc')->take(3)->get();

        return response()->json($allPost, 200);
    }
}
