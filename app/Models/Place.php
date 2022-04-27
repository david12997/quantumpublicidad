<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;

    protected $table = 'Place';
    protected $filliable = [

        'id_place',
        'name',
        'media'
    ];

    protected $primaryKey = 'id_place';
}
