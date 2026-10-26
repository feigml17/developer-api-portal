<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => response()->json([
    'service' => 'Developer API Portal',
    'documentation' => '/api/catalog',
]));

