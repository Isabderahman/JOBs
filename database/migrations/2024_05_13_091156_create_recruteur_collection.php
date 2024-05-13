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
        Schema::connection('mongodb')->create('recruteurs', function (Blueprint $collection) {
            $collection->increments('id');
            $collection->index('idEntreprise');
            $collection->string('prenom');
            $collection->string('nom');
            $collection->string('adresse');
            $collection->unique('email');
            $collection->date('date_naissance');
            $collection->string('mot_de_passe');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recruteur_collection');
    }
};
