<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Province;

class ProvinceController extends Controller
{
    public function index()
    {
        $provinces = Province::all();
        return response()->json($provinces);
    }
}
