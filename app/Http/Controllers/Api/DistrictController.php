<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\District;


class DistrictController extends Controller
{
    public function index($id)
    {
        $districts = District::where('province_id',$id)->get();
        return response()->json($districts);
    }
}
