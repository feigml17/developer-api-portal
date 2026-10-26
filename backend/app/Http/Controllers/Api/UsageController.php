<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;

class UsageController
{
    public function index(): JsonResponse
    {
        return response()->json([
            'period' => 'last_7_days',
            'requests' => 18420,
            'success_rate' => 99.72,
            'p95_latency_ms' => 182,
            'daily' => [2100, 2480, 2650, 2390, 3010, 2860, 2930],
        ]);
    }
}

