<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocalSupport extends Model
{
        
    use SoftDeletes;

    use HasFactory;
    protected $table='local_supports';
    protected $fillable = [
        'fmname', 'lname','province_id','district_id','municipality_id','wardno','tole','phone','email','letter','hfdetails',
     ];

}
