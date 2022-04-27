<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaceBillboardData extends Model
{
    use HasFactory;

    protected $table = 'Place_Billboard_data';

    protected $filliable = [

        'id_place',
        'Bucaramanga',
        'media_place',
        'id_billboard',
        'address',
        'type',
        'latitude',
        'longitude',
        'description',
        'direction',
        'size',
        'price',
        'georeference',
        'media'
    ];
}
