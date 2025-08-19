<?php

namespace App\Http\Services;

use App\Constants\ApiHttpStatus;
use App\Constants\ApiStatus;
use App\Traits\ApiRespones;
use Illuminate\Support\Facades\Auth;


class AuthService
{
    use ApiRespones;

    public function loginService($request)
    {
        if(!Auth::attempt($request->only('email', 'password'))){
            return $this->makeResponse(
                ApiStatus::ERROR->value,
                'Invalid credentials',
                [
                    'email'=>'Invalid',
                    'password'=>'Invalid'
                ],
                ApiHttpStatus::UNAUTHORIZED->value
            );
        }
        
    }
}
