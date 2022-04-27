<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreatePlaceBillboardDataView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement($this->dropView());
        DB::statement($this->createView());
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement($this->dropView());
    }

    private function createView()
    {
        return <<<SQL
            CREATE VIEW `Place_Billboard_data` AS select `p`.`id_place` AS `id_place`,`p`.`name` AS `Place`,`p`.`media` AS `media_place`,`b`.`id_billboard` AS `id_billboard`,`b`.`address` AS `address`,`b`.`type` AS `type`,`b`.`latitude` AS `latitude`,`b`.`longitude` AS `longitude`,`b`.`description` AS `description`,`b`.`direction` AS `direction`,`b`.`size` AS `size`,`b`.`price` AS `price`,`b`.`georeference` AS `georeference`,`b`.`media` AS `media` from ((`Billboard` `b` join `Place` `p`) join `Place_Billboard` `x`) where `x`.`id_place` = `p`.`id_place` and `x`.`id_billboard` = `b`.`id_billboard`
        SQL;
    }

    private function dropView()
    {
        return <<<SQL
            DROP VIEW IF EXISTS `Place_Billboard_data`;
        SQL;
    }
}
