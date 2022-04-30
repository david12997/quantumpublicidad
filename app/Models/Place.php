<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'Place';
    protected $fillable = [

        'name',
        'media',
        'available'
    ];

    protected $primaryKey = 'id_place';
}
