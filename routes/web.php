<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocalSupportController;
use App\Http\Controllers\NewsletterController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Route::get('/local-support', function () {
//     return view('localsupport.create');
//   });





// Route::middleware('auth:sanctum')->get('/list', function () {
//     return view('localsupport.list');
// });


  

Route::get('/login', function () {
    return view('login');
})->name('login');

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

// Route::get('/local-support/edit/{token}', [LocalSupportController::class, 'editForm']);






