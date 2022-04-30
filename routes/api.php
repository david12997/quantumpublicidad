<?php

use App\Http\Controllers\BillboardController;
use App\Http\Controllers\MessageCostumerController;
use App\Http\Controllers\PlaceBillboardDataController;
use App\Http\Controllers\PlaceController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\StorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::middleware(['access.api'])->group(function(){

    Route::resource('place-billboards',PlaceBillboardDataController::class);
    Route::resource('billboard',BillboardController::class);
    Route::resource('place', PlaceController::class);
    Route::resource('service',ServiceController::class);
    Route::resource('storie',StorieController::class);
    Route::resource('message',MessageCostumerController::class);

});

