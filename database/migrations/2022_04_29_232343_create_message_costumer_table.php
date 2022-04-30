<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessageCostumerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message_costumer', function (Blueprint $table) {
            $table->bigInteger('id_message')->primary();
            $table->string('name_costumer');
            $table->string('email_costumer');
            $table->mediumText('message_costumer');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('message_costumer');
    }
}
