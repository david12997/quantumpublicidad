<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Storie extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'Success_storie';

    protected $fillable = [

        'name',
        'description',
        'media',
        'highlight'
    ];

    protected $primaryKey = 'id_storie';
}
