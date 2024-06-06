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
        Schema::create('local_supports', function (Blueprint $table) {
            $table->id();
            $table->string('fmname');
            $table->string('lname');
            $table->integer('province_id');
            $table->integer('district_id');
            $table->integer('municipality_id');
            $table->string('wardno');
            $table->string('tole');
            $table->string('phone');
            $table->string('email');
            $table->longText('letter');
            $table->longText('hfdetails');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('local_supports');
    }
};
