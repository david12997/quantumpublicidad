<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Service', function (Blueprint $table) {
            $table->integer('id_service')->primary();
            $table->string('name');
            $table->mediumText('description');
            $table->mediumText('short_description');
            $table->longText('media')->nullable();
            $table->string('highlight');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Service');
    }
}
