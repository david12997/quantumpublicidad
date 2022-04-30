<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaceBillboardData extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'Place_Billboard_data';

    protected $fillable = [

        'Place',
        'media_place',
        'available_place',
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
        'media',
        'available_billboard'
    ];
}
