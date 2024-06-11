<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    // public function login(Request $request)
    // {
    //     $data = json_decode($request->getContent(), true);
    //     $username = $data['username'];
    //     $password = md5($data['password']);
    //     $user = User::where('username', $username)
    //     ->where('password', $password)
    //     ->first();
    //     $token = $user->createToken('authToken')->plainTextToken;

    //     // $id = encrypt($user->id);
    //     // dd($id);
    //     if($user){
    //         return response()->json(['success' => true, 'message' => 'Login successful','token' => $token], 200);

    //     }

    //     return response()->json(['error' => 'Unauthorized'], 401);
    // }
    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'username' => 'required|string',
    //         'password' => 'required|string',
    //     ]);

    //     $data = json_decode($request->getContent(), true);
    //         $username = $data['username'];
    //         $password = md5($data['password']);
    //         $user = User::where('username', $username)
    //         ->where('password', $password)
    //         ->first();

    //     $token = $user->createToken('authToken')->plainTextToken;
    //     if($user){
    //         return redirect('/local-support');
    //     }
       
    // }
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $data = json_decode($request->getContent(), true);
        $username = $data['username'];
        $password = $data['password'];
        $user = User::where('username', $username)->first();

        if (!$user) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        if (Auth::attempt(['username' => $username, 'password' => $password])) {
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'success' => true,
                'message' => 'Login successful',
                'token' => $token
            ], 200);
        } else {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
        
    }

    public function logout()
    {
        return Auth::logout();
    }



}
