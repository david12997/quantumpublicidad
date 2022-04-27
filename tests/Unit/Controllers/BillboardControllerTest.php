<?php

namespace Tests\Unit\Controllers;

use Tests\TestCase;
use App\Http\Controllers\BillboardController;

class BillboardControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_billboard_controller_index()
    {
        $billboards = new BillboardController();

        $this->assertInstanceOf(BillboardController::class,$billboards);
        $this->assertIsObject($billboards->index());
    }
}
