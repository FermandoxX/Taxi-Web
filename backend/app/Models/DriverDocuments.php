<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property string $direver_license
 * @property int $on_job
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments whereDireverLicense($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments whereOnJob($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DriverDocuments whereUserId($value)
 * @mixin \Eloquent
 */
class DriverDocuments extends Model
{
    protected $fillable = [
        'direver_license',
        'user_id'
    ];
}
