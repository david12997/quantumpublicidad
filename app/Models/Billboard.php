<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billboard extends Model
{
    use HasFactory;

    protected $table = 'Billboard';
    protected $filliable = [

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

    protected $primaryKey = 'id_billboard';
}
