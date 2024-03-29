<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Otp extends Model
{
    use HasFactory;
    protected $table='otps';
    protected $fillable = [
        'email','phone','otp','expire_at'
    ];

    public function sendSMS($receiverNumber)
    {
        $message ='Your OTP is'.$this->otp;
        try{
            $account_id = getenv("TWILIO_SID");
            $auth_token = getenv("TWILIO_TOKEN");
            $twilio_number = getenv("TWILIO_FROM");
            $client= new Client($account_id, $auth_token);
            $client->messages->create($receiverNumber,[
                'from' =>$twilio_number,
                'body' =>$message
            ]);

            // // SMS after booking confirm
            // $args = http_build_query(array(
            //     'auth_token'=> env('SMS_AUTH_KEY'),
            //     'from'  => env('SMS_FROM'),
            //     'to'    => $receiverNumber,
            //     'text'  => $message));
            // $url = env('SMS_URL');
            
            // # Make the call using API.
            // $ch = curl_init();
            // curl_setopt($ch, CURLOPT_URL, $url);
            // curl_setopt($ch, CURLOPT_POST, 1); ///
            // curl_setopt($ch, CURLOPT_POSTFIELDS,$args);
            // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
            // // Response
            // $response = curl_exec($ch);
            // curl_close($ch);                
            // info("SMS send successfully!");
        }catch(\Exception $e){
            info("Error: ".$e->getMessage());
        }
    }


}
