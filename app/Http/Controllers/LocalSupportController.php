<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LocalSupport;
use App\Models\Subscriber;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Crypt;



class LocalSupportController extends Controller
{
    public function index()
    {
        return view('localsupport.create');
    }

    // public function store(Request $request)
    // {
        
    //     // $letterFilePath = $request->file('letter')->storeAs('public/uploads', $letterFileName);
    //     // // dd($request->file('letter'));
    //     // $hfdetailsFilePath = $request->file('hfdetails')->storeAs('public/uploads', $hfdetailsFileName);

    //     $local_support = LocalSupport::updateOrCreate($data);  
    //     // $sendMailController = new MailController();
    //     // $sendMailController->sendProfileEmail($request);  
    //     return response()->json([
    //         'data' => $local_support,
    //         'response' => 200,
    //     ]);
    // }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fmname' => 'required|string',
            'lname' => 'required|string',
            'province_id' => 'required|integer',
            'district_id' => 'required|integer',
            'municipality_id' => 'required|integer',
            'wardno' => 'required|string',
            'tole' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            // 'letter' => 'required|file|mimes:pdf', 
            // 'hfdetails' => 'required|file|mimes:xlsx', 
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors(),
                'response' => 400,
            ]);
        }

        try {
        $data = [
            'fmname' => $request->input('fmname'),
            'lname' => $request->input('lname'),
            'province_id' => $request->input('province_id'),
            'district_id' => $request->input('district_id'),
            'municipality_id' => $request->input('municipality_id'),
            'wardno' => $request->input('wardno'),
            'tole' => $request->input('tole'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
        ];


            //Handle file uploads
            $letterFileName = null;
            if ($request->hasFile('letter')) {
                $letter = $request->file('letter');
                $letterFileName = time() . '_' . $letter->getClientOriginalName();
                $letter->storeAs('public/uploads', $letterFileName);
                $data['letter'] = $letterFileName;
            }

            $hfdetailsFileName = null;
            if ($request->hasFile('hfdetails')) {
                $hfdetails = $request->file('hfdetails');
                $hfdetailsFileName = time() . '_' . $hfdetails->getClientOriginalName();
                $hfdetails->storeAs('public/uploads', $hfdetailsFileName);
                $data['hfdetails'] = $hfdetailsFileName;
            }
          
            $local_support = LocalSupport::updateOrCreate($data);
            $request->merge(['letter' => $letterFileName, 'hfdetails' => $hfdetailsFileName]); 
            $sendMail = new MailController();
            $sendMail->sendLocalSupportEmail($request);


            return response()->json([
                'data' => $local_support,
                'response' => 200,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'response' => 500,
            ]);
        }
    }

    // public function show()
    // {
    //     // $data = LocalSupport::all();
    //     // return response()->json($data);
    //     $data = LocalSupport::withTrashed()
    //     ->select(
    //         'local_supports.*', 
    //         'provinces.province_name as province_name', 
    //         'districts.district_name as district_name', 
    //         'municipalities.municipality_name as municipality_name'
    //     )
    //     ->leftJoin('provinces', 'local_supports.province_id', '=', 'provinces.id')
    //     ->leftJoin('districts', 'local_supports.district_id', '=', 'districts.id')
    //     ->leftJoin('municipalities', 'local_supports.municipality_id', '=', 'municipalities.id')
    //     ->whereNull('local_supports.deleted_at')
    //     ->get()
    //     ->map(function($item) {
    //         $item->token = Crypt::encrypt($item->id);
    //         return $item;
    //     });
    
    //     return response()->json($data);
    
    // }

    public function show()
    {
        $data = Subscriber::all();
        return response()->json($data);
    }


    public function delete($id)
    {
        $data = LocalSupport::findOrFail($id);
        $sendMail = new MailController();
        $sendMail->sendDeletClientEmail($data);
        $client_delete= $data->delete();
        if($client_delete){
            return response()->json(['message' => 'client deleted successfully']);
        }
    }
    public function editForm($id){
        $id = Crypt::decrypt($id);
        $data = LocalSupport::where('id',  $id)->first();
        return view('localsupport.create', compact('data'));
    }
}
