<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Mail\ActivationEmail;
use App\Mail\DataEmail;
use App\Mail\ProfileEmail;
use App\Mail\LocalSupportEmail;
use App\Mail\LocalSupportDeleteEmail;
use App\Models\User;
use App\Models\LocalSupport;

use Illuminate\Support\Facades\Crypt;



class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $email = $request->input('email');
        $organizationType = $request->input('organizationType');

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
      
        $encryptedEmail = encrypt($email);
        $encryptedOrganizationType = encrypt($organizationType);
    
        $activationLink = url('/account-activation-form') . "?email=$encryptedEmail&organizationType=$encryptedOrganizationType";

        Mail::to($email)->send(new ActivationEmail($activationLink));
        
        $anotherEmail = 'rmchndrapdl@gmail.com'; 
        $ccEmails = 'dhis2.amakomaya@gmail.com';
        Mail::to($anotherEmail) ->cc($ccEmails)->send(new DataEmail($email, $organizationType)); 
        $user = User::create($data);
        return response()->json([
            'message' => 'Email sent and user created successfully',
            'data' => $user,
        ], 200);

    }

    public function sendProfileEmail(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $encryptedEmail = $data['email'];
        $data['email'] = Crypt::decrypt($encryptedEmail);
        $email =$data['email'];
        $fname =$data['fmname'];
        $lname = $data['lname'];
        $phone = $data['phone'];
        $purpose = $data['purpose'];
        $anotherEmail = 'rmchndrapdl@gmail.com'; 
        $ccEmails = 'dhis2.amakomaya@gmail.com';
        Mail::to($anotherEmail) ->cc($ccEmails)->send(new ProfileEmail($email,$fname,$lname,$phone,$purpose)); 

    }

    public function sendLocalSupportEmail(Request $request)
    {
        // $data = json_decode($request->getContent(), true);
        $email = $request->input('email');
        $fname = $request->input('fmname');
        $lname = $request->input('lname');
        $phone =  $request->input('phone');
        // dd($phone);
        $anotherEmail = 'kripa@amakomaya.com'; 
        $ccEmails = 'abc@gmail.com';
        // $anotherEmail = 'rmchndrapdl@gmail.com'; 
        // $ccEmails = 'dhis2.amakomaya@gmail.com';
        Mail::to($anotherEmail) ->cc($ccEmails)->send(new LocalSupportEmail($email,$fname,$lname,$phone)); 

    }

    public function sendDeletClientEmail(LocalSupport $data)
    {
        $email = $data->email;
        $fname = $data->fmname;
        $lname = $data->lname;
        $phone =  $data->phone;
        $anotherEmail = 'kripa@amakomaya.com'; 
        $ccEmails = 'abc@gmail.com';
        // $anotherEmail = 'rmchndrapdl@gmail.com'; 
        // $ccEmails = 'dhis2.amakomaya@gmail.com';
        Mail::to($anotherEmail) ->cc($ccEmails)->send(new LocalSupportDeleteEmail($email,$fname,$lname,$phone)); 

    }
    
}
