<?php

namespace App\Constants;

enum ApiHttpStatus : int
{
    case SUCCESS = 200;
    case BAD_REQUEST = 400;
    case UNAUTHORIZED = 401;
    case FORBIDDEN = 403;
    case NOT_FOUND = 404;
    case INTERNAL_SERVER_ERROR = 500;
    case UNPROCESSABLE_CONTENT = 422;
}