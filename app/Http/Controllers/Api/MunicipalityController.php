<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Municipality;


class MunicipalityController extends Controller
{
    public function index($id)
    {
        $municipalities = Municipality::where('district_id',$id)->get();
        return response()->json($municipalities);
    }
}
