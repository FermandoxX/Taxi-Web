<?php

namespace App\Http\Requests;

use App\Constants\ApiHttpStatus;
use App\Constants\ApiStatus;
use App\Traits\ApiRespones;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class BaseRequest extends FormRequest
{
    use ApiRespones;
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
            //
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        $allErrors = [];

        foreach ($errors->keys() as $field) {
            $fieldError = $errors->first($field);

            $allErrors[$field] = $fieldError;
        }

        $response = $this->makeResponse(
            ApiStatus::ERROR->value,
            'Some fields are incomplete or incorrect.',
            [
                $allErrors
            ],
            ApiHttpStatus::UNPROCESSABLE_CONTENT->value
        );

        throw new HttpResponseException($this->sendResponse($response));
    }
}
