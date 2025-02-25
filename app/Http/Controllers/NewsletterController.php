<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscriber;
use App\Models\Newsletter;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewsletterMail;
use Illuminate\Support\Facades\Crypt;



class NewsletterController extends Controller

{

    public function index()
    {
        return view('localsupport.newsletter');
    }

    // public function store(Request $request)
    // {
    //     try {
    //         $validatedData = $request->validate([
    //             'newsletter_id' => 'required|string',
    //             'subject' => 'required|string',
    //             'top_banner' => 'required|string',
    //             'date' => 'required|date',
    //             'title' => 'required|string',
    //             'image' => 'nullable|string',
    //             'image_link' => 'nullable|string',
    //             'summary' => 'nullable|string',
    //             'description' => 'nullable|string',
    //             'is_upcoming_events_date' => 'nullable|date',
    //             'is_upcoming_events_time' => 'nullable|string',
    //             'is_upcoming_events_location' => 'nullable|string',
    //             'registration_link' => 'nullable|url',
    //             'meeting_link' => 'nullable|url',
    //         ]);

    //         $newsletter = Newsletter::updateOrCreate(
    //             ['newsletter_id' => $validatedData['newsletter_id']], 
    //             $validatedData
    //         );

    //         return response()->json([
    //             'data' => $newsletter,
    //             'response' => 200,
    //         ]);
    //     } catch (\Exception $e) {
    //         return response()->json([
    //             'error' => $e->getMessage(),
    //             'response' => 500,
    //         ]);
    //     }
    // }


public function store(Request $request)
{
    try {
        $validatedData = $request->validate([
            'newsletter_id' => 'required|string',
            'encrypted_newsletter_id'=>'nullable|string',
            'subject' => 'required|string',
            'top_banner' => 'required|string',
            'date' => 'required|date',
            'title' => 'required|string',
            'image' => 'nullable|string',
            'image_link' => 'nullable|string',
            'summary' => 'nullable|string',
            'description' => 'nullable|string',
            'is_upcoming_events_date' => 'nullable|date',
            'is_upcoming_events_time' => 'nullable|string',
            'is_upcoming_events_location' => 'nullable|string',
            'registration_link' => 'nullable|url',
            'meeting_link' => 'nullable|url',
        ]);

        $validatedData['encrypted_newsletter_id'] = Crypt::encrypt($validatedData['newsletter_id']);

        $newsletter = Newsletter::updateOrCreate(
            ['newsletter_id' => $validatedData['newsletter_id']], 
            $validatedData
        );

        return response()->json([
            'data' => $newsletter,
            'response' => 200,
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => $e->getMessage(),
            'response' => 500,
        ]);
    }
}

    public function sendNewsletter($id)
    {
        $subscribers = Subscriber::all();
        $data = Newsletter::where('newsletter_id', $id)->first(); 
        foreach ($subscribers as $subscriber) {
            Mail::to($subscriber)->send(new NewsletterMail($data));
        }
    }



    public function show()
    {
        $data = Newsletter::whereNull('deleted_at')->get();
        return response()->json($data);
    }
    

    public function delete($id)
    {
        $data = Newsletter::findOrFail($id);
        $client_delete= $data->delete();
        if($client_delete){
            return response()->json(['message' => 'client deleted successfully']);
        }
    }
    public function editForm($id){
        $id = Crypt::decrypt($id);
        $data = Newsletter::where('newsletter_id',  $id)->first();
        return response()->json($data);
    }

}
