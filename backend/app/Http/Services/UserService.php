<?php

namespace App\Http\Services;

use App\Traits\ApiRespones;

class UserService {
    use ApiRespones;

    public function update($request){
        $user = $request->user();

        dd($user);
    }
}


?>