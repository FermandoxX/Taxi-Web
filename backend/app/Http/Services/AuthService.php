<?php

namespace App\Http\Services;

use App\Constants\ApiHttpStatus;
use App\Models\User;
use App\Constants\ApiStatus;
use App\Http\Resources\UserResource;
use App\Models\DriverDocuments;
use App\Traits\ApiRespones;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AuthService
{
    use ApiRespones;

    public function login($request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return $this->makeResponse(
                ApiStatus::ERROR->value,
                'Invalid credentials',
                [],
                ApiHttpStatus::UNPROCESSABLE_CONTENT->value
            );
        }

        $user = User::firstWhere('email', $request->email);

        if($user->driver_documents){
            if(!$user->driver_documents->on_job){
                return $this->makeResponse(
                    ApiStatus::ERROR->value,
                    'Invalid credentials',
                    [],
                    ApiHttpStatus::UNPROCESSABLE_CONTENT->value
                );
            }
        }

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

    public function register($request)
    {
        User::create($request->toArray());

        $user = User::firstWhere('email', $request->email);
        $user->assignRole('user');

        $token = $user->createToken(
            'Api token for ' . $user->email,
            ['*'],
            now()->addHour()
        )->plainTextToken;

        $token = Str::after($token, '|');

        return $this->makeResponse(
            ApiStatus::SUCCESS->value,
            'Registerd successful',
            [
                'token' => $token,
                'user' => new UserResource($user->only('id', 'email'))
            ]
        );
    }

    public function apply($request)
    {   
        $userData = $request->except("driver_licence");
        $driverLicense = $request->file('driver_license');
        $driverLicenseFilename = time() . '_' . uniqid() . '.' . $driverLicense->getClientOriginalExtension();
        $path = $driverLicense->storeAs('driver_license', $driverLicenseFilename, 'public');
        
        $user = User::create($userData);
        $user->assignRole('driver');

        $driverId = User::firstWhere('email', $request->email)->id;
        DriverDocuments::create(['user_id'=>$driverId,'direver_license'=>$path]);
        
        return $this->makeResponse(
            ApiStatus::SUCCESS->value,
            'Apply successful',
            []
        );
    }
}
