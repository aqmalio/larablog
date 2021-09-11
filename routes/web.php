<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Aqmal\WebController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WebController::class, 'index']);

Route::prefix('api')->group(function () {
    Route::get('/get-all-post', [WebController::class, 'getAllPost']);
    Route::get('/get-popular-post', [WebController::class, 'getPopularPost']);
});
