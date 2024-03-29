<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Otp;


class OtpController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'phone' => ['required', 'numeric'], 
        ]);
        $otp = rand(100000, 999999); 
        $expiration = Carbon::now()->addMinutes(5);
        $user = User::where('phone',$request->phone)->first();
        if($user)
        {
            $smsService = Otp::create([
                'phone' => $request->phone,
                'otp' => $otp, 
                'expire_at' => $expiration
            ]);
            $phoneNumber = '+977' . $request->phone;
            $smsService->sendSMS($phoneNumber);
           


        }

       
        return redirect()->back()->with('error', 'यो फोन नम्बर भएको प्रयोगकर्ता अवस्थित छैन ।');


    }
}
