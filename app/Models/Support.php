<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Support extends Model
{
    use HasFactory;
    protected $table='support_informations';
    protected $fillable = [
       'first_name', 'last_name','email', 'subject','message'
    ];

    
}
