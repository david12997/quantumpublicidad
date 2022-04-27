<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillboardTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Billboard', function (Blueprint $table) {
            $table->integer('id_billboard')->primary();
            $table->string('address');
            $table->string('type');
            $table->string('latitude');
            $table->string('longitude');
            $table->mediumText('description');
            $table->string('direction');
            $table->string('size');
            $table->integer('price');
            $table->mediumText('georeference');
            $table->longText('media')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Billboard');
    }
}
