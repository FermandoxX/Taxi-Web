<?php

namespace App\Http\Services;

use App\Constants\ApiHttpStatus;
use App\Models\User;
use App\Constants\ApiStatus;
use App\Http\Resources\UserResource;
use App\Traits\ApiRespones;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AuthService
{
    use ApiRespones;

    public function loginService($request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return $this->makeResponse(
                ApiStatus::ERROR->value,
                'Invalid credentials',
                [
                    'email' => 'Invalid',
                    'password' => 'Invalid'
                ],
                ApiHttpStatus::UNAUTHORIZED->value
            );
        }

        $user = User::firstWhere('email', $request->email);

        $token = $user->createToken(
            'Api token for ' . $user->email,
            ['*'],
            now()->addHour()
        )->plainTextToken;

        $token = Str::after($token, '|');

        return $this->makeResponse(
            ApiStatus::SUCCESS->value,
            'Login successful',
            [
                'token' => $token,
                'user' => new UserResource($user->only('id', 'email'))
            ]
        );
    }
}
