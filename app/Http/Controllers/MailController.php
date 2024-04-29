<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Mail\ActivationEmail;
use App\Mail\DataEmail;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;



class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $email = $request->input('email');
        $organizationType = $request->input('organizationType');
    
        // Encrypt email and organization type here
        $encryptedEmail = encrypt($email);
        $encryptedOrganizationType = encrypt($organizationType);
    
        // Generate activation link
        $activationLink = url('/account-activation-form') . "?email=$encryptedEmail&organizationType=$encryptedOrganizationType";

        Mail::to($email)->send(new ActivationEmail($activationLink));
        
        $anotherEmail = 'rmchndrapdl@gmail.com'; 
        Mail::to($anotherEmail)->send(new DataEmail($email, $organizationType)); 

        $data = [
            'email' => $email,
            'organization_types' => $organizationType,
        ];  
        $existingUser = User::where('email', $data['email'])->first();
        if ($existingUser) {
            return response()->json([
                'message' => 'This email is already registered !',
                'data' => $existingUser,
            ], 422);
        }
        $user = User::create($data);
        return response()->json([
            'message' => 'Email sent and user created successfully',
            'data' => $user,
        ], 200);

    }
}
