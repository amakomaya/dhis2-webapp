<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Support;
use App\Models\Subscriber;


class SupportController extends Controller
{
    public function store(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $support = Support::create($data);
        return response()->json([
            'data' => $support,
            'response' => 200,
        ]);
    }

    public function storeSubscribers(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $subscriber = Subscriber::create($data);
        return response()->json([
            'data' => $subscriber,
            'response' => 200,
        ]);
    }
}
