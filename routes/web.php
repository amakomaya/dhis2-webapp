<?php

use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/local-support', function () {
    return view('localsupport.create');
});


  

Route::get('/login', function () {
    return view('login');
})->name('login');

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');




