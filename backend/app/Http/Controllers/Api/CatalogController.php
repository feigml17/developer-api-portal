<?php

namespace App\Http\Controllers\Api;

use App\Models\ApiProduct;
use Illuminate\Http\JsonResponse;

class CatalogController
{
    public function index(): JsonResponse
    {
        return response()->json(ApiProduct::query()->orderBy('name')->get());
    }

    public function show(string $slug): JsonResponse
    {
        return response()->json(ApiProduct::query()->where('slug', $slug)->firstOrFail());
    }
}

