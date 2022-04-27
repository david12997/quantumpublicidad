<?php

namespace Tests\Unit\Controllers;

use Tests\TestCase;
use App\Http\Controllers\ServiceController;

class ServiceControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_service_controller_index()
    {
        $services = new ServiceController();

        $this->assertInstanceOf(ServiceController::class,$services);
        $this->assertIsObject($services->index());
    }
}
