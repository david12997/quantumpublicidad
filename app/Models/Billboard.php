<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billboard extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'Billboard';
    protected $fillable = [

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
        'available'
    ];

    protected $primaryKey = 'id_billboard';
}
