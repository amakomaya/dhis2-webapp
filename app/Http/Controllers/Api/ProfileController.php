<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;



class ProfileController extends Controller
{
    public function store(Request $request)
    {
        $encryptedEmail = $request->input('email');
        $decrptedemail = Crypt::decryptString($encryptedEmail);
        $email = substr($decrptedemail, 6, -2);

        $user = User::where('email', $email)->first();
        if (!$user) {
            throw new \Exception('User not found for the provided email.');
        }
        $userId = $user->id;
        $data = json_decode($request->getContent(), true);
        $data['user_id'] = $userId;
        $profile = Profile::updateOrCreate(
            ['user_id' => $userId],
            $data
        );        
        return response()->json([
            'data' => $profile,
            'response' => 200,
        ]);
    }
}
