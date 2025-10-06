<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\ApiRespones;
use App\Constants\ApiStatus;
use App\Constants\ApiHttpStatus;
use App\Http\Requests\User\AdminProfileRequest;
use App\Http\Services\UserService;

class UserController extends Controller
{
    use ApiRespones;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth('sanctum')->user();
        $user->role = $user->roles[0]->name;
        unset($user->roles);  

        $response = $this->makeResponse(
                ApiStatus::SUCCESS->value,
                'User Data',
                new UserResource($user),
                ApiHttpStatus::SUCCESS->value
            );

        return $this->sendResponse($response);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AdminProfileRequest $request, UserService $user)
    {
        $response = $user->update($request);

        return $this->sendResponse($response);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
