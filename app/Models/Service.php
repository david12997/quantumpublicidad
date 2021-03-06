<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'Service';

    protected $fillable = [

        'name',
        'description',
        'media',
        'highlight'
    ];

    protected $primaryKey = 'id_service';
}
