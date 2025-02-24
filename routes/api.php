<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Api\SupportController;
use App\Http\Controllers\Api\ProvinceController;
use App\Http\Controllers\Api\DistrictController;
use App\Http\Controllers\Api\MunicipalityController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LocalSupportController;
use App\Http\Controllers\NewsletterController;






/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/send-email', [MailController::class, 'sendEmail']);
Route::post('/support-info', [SupportController::class, 'store']);
Route::post('/subscribers', [SupportController::class, 'storeSubscribers']);
Route::post('/profiles', [ProfileController::class, 'store']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::post('/local-support/create', [LocalSupportController::class, 'store']);
Route::post('/newsletter', [NewsletterController::class, 'store']);
Route::get('/newsletter/list', [NewsletterController::class, 'show']);

Route::delete('/del/{id}', [LocalSupportController::class, 'delete']); 



Route::get('/provinces', [ProvinceController::class, 'index']);
Route::get('/districts/{id}', [DistrictController::class, 'index']);
Route::get('/municipalities/{id}', [MunicipalityController::class, 'index']);
Route::get('/local-support/list', [LocalSupportController::class, 'show']);
Route::get('/send-newsletter/{id}', [NewsletterController::class, 'sendNewsletter']);
