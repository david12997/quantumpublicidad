<?php

namespace Tests\Unit\Controllers;

use Tests\TestCase;
use App\Http\Controllers\PlaceController;

class PlaceControllerTest extends TestCase
{
    /**
     * test case places quantum publicidad.
     *
     * @return void
     */
    public function test_place_controller_index()
    {
        $places = new PlaceController();

        $this->assertInstanceOf(PlaceController::class,$places);
        $this->assertIsObject($places->index());
    }
}
