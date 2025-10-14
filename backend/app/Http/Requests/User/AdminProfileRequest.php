<?php

namespace App\Http\Requests\User;

use App\Http\Requests\BaseRequest;
use Illuminate\Validation\Rule;

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
            'email'=>['required', 'email', 'string',Rule::unique('users')->ignore(auth()->id())],
            'phone_number'=>['required', 'min:9'],
            'old_password'=>['required','current_password'],
            'new_password' => ['required', 'string', 'min:8', 'confirmed'],
            'new_password_confirmation' => ['required', 'min:8'],
        ];
    }

    public function messages()
    {
        return [
            'old_password.current_password' => 'Your old password is wrong',
            'old_password.required' => 'Your old password is required'
        ];
    }
}
