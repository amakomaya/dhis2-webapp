<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $table='profiles';
    protected $fillable = [
        'user_id','fmname','lname','province_id','district_id','municipality_id',
        'wardno','tole','phone','purpose'
    ];
}
