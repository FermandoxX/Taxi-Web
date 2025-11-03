<?php

namespace App\Http\Services;

use App\Traits\ApiRespones;
use App\Constants\ApiStatus;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Storage;


class UserService {
    use ApiRespones;

    public function update($request){

        $dateToUpdate = [
            'name'=>$request->name,
            'email'=>$request->email,
            'phone_number'=>$request->phone_number,
        ];

        if($request->new_password){
            $dateToUpdate['password'] = $request->new_password;
        }

        if($request->file('profile_pic')){
            $user = auth('sanctum')->user();

            if($user->profile_pic){
                Storage::disk('public')->delete($user->profile_pic);
            }

            $profilePic = $request->file('profile_pic');
            $profilePicFilename = time() . '_' . uniqid() . '.' . $profilePic->getClientOriginalExtension();
            $path = $profilePic->storeAs('profile_pic', $profilePicFilename, 'public');
            $dateToUpdate['profile_pic'] = $path;
        }

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