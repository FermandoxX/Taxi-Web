<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginUser;
use App\Http\Requests\Auth\RegisterUser;
use App\Http\Services\AuthService;
use App\Traits\ApiRespones;

class Auth extends Controller
{
    use ApiRespones;

    public function login(LoginUser $request, AuthService $service)
    {
        $response = $service->login($request);

        return $this->sendResponse($response);
    }

    public function register(RegisterUser $request, AuthService $service)
    {
        $response = $service->register($request);

        return $this->sendResponse($response);
    }
}
