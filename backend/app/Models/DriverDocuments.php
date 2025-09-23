<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DriverDocuments extends Model
{
    protected $fillable = [
        'direver_license',
        'rider_id'
    ];
}
