<?php

namespace App\Traits;

trait ApiRespones {

    protected $response = [];

    protected function makeResponse($status, $message,$data = [], $statusCode = 200)
    {
        return [
            'status' => $status,
            'message' => $message,
            'response' => $data,
            'statusCode' => $statusCode,
        ];
    }

    public function sendResponse($response){

        $this->response = [
            'status' => $response['status'],
            'message' => $response['message'],
            'response' => $response['response'],
            'statusCode' => $response['statusCode']
        ];

        return response()->json($this->response, $response['statusCode']);
    }

}
