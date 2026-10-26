<?php

namespace Tests\Feature;

use App\Models\ApiProduct;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CatalogApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_catalog_returns_published_api_products(): void
    {
        ApiProduct::create([
            'name' => 'Shipment Tracking API',
            'slug' => 'shipment-tracking',
            'description' => 'Track shipment milestones.',
            'version' => 'v1',
            'status' => 'active',
            'base_url' => 'https://sandbox.example.test/tracking/v1',
        ]);

        $this->getJson('/api/catalog')
            ->assertOk()
            ->assertJsonPath('0.slug', 'shipment-tracking');
    }
}
