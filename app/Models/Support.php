<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Support extends Model
{
    use HasFactory;
    protected $table='support_informations';
    protected $fillable = [
       'name','email', 'subject','message'
    ];

    
}
