<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuccessStorieTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Success_storie', function (Blueprint $table) {
            $table->integer('id_storie')->primary();
            $table->string('name');
            $table->mediumText('description');
            $table->longText('media');
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
        Schema::dropIfExists('Success_storie');
    }
}
