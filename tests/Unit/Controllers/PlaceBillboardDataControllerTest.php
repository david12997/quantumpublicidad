<?php

namespace Tests\Unit\Controllers;

use Tests\TestCase;
use App\Http\Controllers\PlaceBillboardDataController;

class PlaceBillboardDataControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_billboard_controller_data_index()
    {
        $billboards_place = new PlaceBillboardDataController();

        $this->assertInstanceOf(PlaceBillboardDataController::class,$billboards_place);
        $this->assertIsObject($billboards_place->index());
    }
}
