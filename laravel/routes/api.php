<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GceCaracController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/caracteristicas', [GceCaracController::class, 'index']);
Route::get('/caracteristicas/{id}', [GceCaracController::class, 'show']);
Route::post('/sendPc', [GceCaracController::class, 'store']);
Route::post('/editPc/{id}', [GceCaracController::class, 'update']);
Route::post('/editStatus/{id}', [GceCaracController::class, 'updateStatus']);
Route::delete('/deletPc/{id}', [GceCaracController::class, 'destroy']);

?>
