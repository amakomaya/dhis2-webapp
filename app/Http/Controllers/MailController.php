<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Mail\ActivationEmail;
use App\Models\User;


class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $email = $request->input('email');
        $activationLink = $request->input('activationLink');

        Mail::to($email)->send(new ActivationEmail($activationLink));
        $data = [
            'email' => $email,
            'organization_types' => $request->input('organizationType'),
        ];  
        $user = User::create($data);
        return response()->json([
            'message' => 'Email sent and user created successfully',
            'data' => $user,
        ], 200);

    }
}
