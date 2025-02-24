<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    use HasFactory;
    protected $table='newsletters';

    protected $fillable = [
        'newsletter_id', 'subject', 'top_banner', 'date', 'title', 'summary', 'description',
        'image', 'image_link', 'is_upcoming_events_date', 'is_upcoming_events_time', 
        'is_upcoming_events_location', 'registration_link', 'meeting_link'
    ];
}
