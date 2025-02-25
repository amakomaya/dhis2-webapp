<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('newsletters', function (Blueprint $table) {
            $table->id();
            $table->string('newsletter_id')->unique();
            $table->varchar('encrypted_newsletter_id',255);
            $table->string('subject');
            $table->string('top_banner')->nullable();
            $table->date('date');
            $table->string('title');
            $table->text('summary');
            $table->string('description');
            $table->string('image')->nullable();
            $table->string('image_link')->nullable();
            $table->date('is_upcoming_events_date')->nullable();
            $table->time('is_upcoming_events_time')->nullable();
            $table->string('is_upcoming_events_location')->nullable();
            $table->string('registration_link')->nullable();
            $table->string('meeting_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('newsletters');
    }
};
