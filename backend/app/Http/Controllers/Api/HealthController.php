<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;
use Throwable;

class HealthController
{
    public function __invoke(): JsonResponse
    {
        $checks = ['database' => false, 'redis' => false];

        try {
            DB::select('select 1');
            $checks['database'] = true;
        } catch (Throwable) {
        }

        try {
            $checks['redis'] = Redis::ping() !== false;
        } catch (Throwable) {
        }

        $healthy = !in_array(false, $checks, true);

        return response()->json([
            'status' => $healthy ? 'healthy' : 'degraded',
            'checks' => $checks,
            'timestamp' => now()->toIso8601String(),
        ], $healthy ? 200 : 503);
    }
}

