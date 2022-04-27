<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaceBillboardTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Place_Billboard', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->integer('id_place');
            $table->integer('id_billboard');
            
            $table->foreign('id_billboard', 'billboard_place')->references('id_billboard')->on('Billboard')->onUpdate('cascade');
            $table->foreign('id_place', 'place_billboard')->references('id_place')->on('Place')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Place_Billboard');
    }
}
