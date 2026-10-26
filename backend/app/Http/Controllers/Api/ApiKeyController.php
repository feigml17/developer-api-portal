<?php

namespace App\Http\Controllers\Api;

use App\Models\DeveloperApiKey;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ApiKeyController
{
    public function index(Request $request): JsonResponse
    {
        return response()->json($request->user()->developerApiKeys()->latest()->get());
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate(['name' => ['required', 'string', 'max:100']]);
        $plainTextToken = 'dp_'.Str::random(48);

        $key = DeveloperApiKey::create([
            'user_id' => $request->user()->id,
            'name' => $validated['name'],
            'token_hash' => hash('sha256', $plainTextToken),
            'expires_at' => now()->addDays(90),
        ]);

        return response()->json([
            'message' => 'Store this key securely. It will not be shown again.',
            'api_key' => $plainTextToken,
            'metadata' => $key,
        ], 201);
    }

    public function destroy(Request $request, DeveloperApiKey $apiKey): JsonResponse
    {
        abort_unless($apiKey->user_id === $request->user()->id, 403);
        $apiKey->delete();

        return response()->json(status: 204);
    }
}

