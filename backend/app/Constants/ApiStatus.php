<?php

namespace App\Constants;

enum ApiStatus : string
{
    case AUTHENTICATED = 'authenticated';
    case UNVERIFIED = 'unverified';
    case ERROR = 'error';
    case SUCCESS = 'success';
}