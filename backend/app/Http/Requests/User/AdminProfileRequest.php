<?php

namespace App\Http\Requests\User;

use App\Http\Requests\BaseRequest;

class AdminProfileRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>['required','string','min:3'],
            'email'=>['required', 'email', 'string', 'unique:users'],
            'phone_number'=>['required', 'min:9']
        ];
    }
}
