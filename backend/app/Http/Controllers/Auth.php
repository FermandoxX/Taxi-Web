<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUser;
use App\Http\Services\AuthService;
use App\Traits\ApiRespones;

class Auth extends Controller
{
    use ApiRespones;

    public function login(LoginUser $request,AuthService $service)
    {
        
        $response = $service->loginService($request);
        
        return $this->sendResponse($response);
    }
}
