<?php

use App\Http\Controllers\Auth;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [Auth::class, 'login']);
Route::post('/register', [Auth::class, 'register']);
Route::post('/apply', [Auth::class, 'apply']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/home', [HomeController::class, 'index']);
    Route::get('/user',[UserController::class,'index']);
    Route::post('/userUpdate',[UserController::class,'update']);

});
