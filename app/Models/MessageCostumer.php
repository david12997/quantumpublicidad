<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessageCostumer extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = "message_costumer";

    protected $fillable =[

        "name_costumer",
        "email_costumer",
        "message_costumer"
    ];

    protected $primaryKey = "id_message";
}
