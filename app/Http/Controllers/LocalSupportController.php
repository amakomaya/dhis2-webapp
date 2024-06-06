<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LocalSupport;


class LocalSupportController extends Controller
{
    public function index()
    {
        return view('localsupport.create');
    }

    public function store(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        // dd($request);
        // $letterFileName = basename($data['letter']);
        // $hfdetailsFileName = basename($data['hfdetails']);

        $letterFilePath = $request->file('letter')->storeAs('public/uploads', $letterFileName);
        // dd($request->file('letter'));
        $hfdetailsFilePath = $request->file('hfdetails')->storeAs('public/uploads', $hfdetailsFileName);

        $local_support = LocalSupport::updateOrCreate($data);  
        // $sendMailController = new MailController();
        // $sendMailController->sendProfileEmail($request);  
        return response()->json([
            'data' => $local_support,
            'response' => 200,
        ]);
    }
}
