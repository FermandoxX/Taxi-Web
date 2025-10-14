<?php

namespace App\Http\Services;

use App\Traits\ApiRespones;
use Illuminate\Support\Facades\Hash;
use App\Constants\ApiStatus;
use App\Http\Resources\UserResource;

class UserService {
    use ApiRespones;

    public function update($request){
        $dateToUpdate = [
            'name'=>$request->name,
            'email'=>$request->email,
            'phone_number'=>$request->phone_number,
            'password' => $request->new_password,
        ];

        auth()->user()->update($dateToUpdate);
        $user = auth()->user()->fresh();

         return $this->makeResponse(
            ApiStatus::SUCCESS->value,
            'User update successful',
            [
                new UserResource($user)
            ]
        );

    }
}


?>