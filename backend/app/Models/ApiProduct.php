<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiProduct extends Model
{
    protected $fillable = [
        'name', 'slug', 'description', 'version', 'status', 'base_url', 'openapi_url',
    ];
}

