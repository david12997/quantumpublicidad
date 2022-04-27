<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $table = 'Service';

    protected $filliable = [

        'id_service',
        'name',
        'description',
        'media'
    ];

    protected $primaryKey = 'id_service';
}
