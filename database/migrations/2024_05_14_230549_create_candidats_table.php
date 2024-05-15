<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::connection('mongodb')->create('candidats', function (Blueprint $table) {
            $table->increments('id');
            $table->string('prenom');
            $table->string('nom');
            $table->string('adresse');
            $table->unique('email');
            $table->date('date_naissance');
            $table->string('mot_de_passe');

            $table->nested('education', function (Blueprint $table) {
                $table->string('diplome');
                $table->string('institut');
                $table->date('date_debut');
                $table->date('date_fin');
                $table->string('description');
            });

            $table->nested('experiences', function (Blueprint $table) {
                $table->string('poste');
                $table->string('entreprise');
                $table->date('date_debut');
                $table->date('date_fin');
                $table->string('description');
            });

            $table->array('competences');
            $table->string('telephone');

            // Relationships
            $table->many('candidatures')->references('id')->on('offres'); // Many-to-many relationship with 'offres' collection

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::connection('mongodb')->drop('candidats');
    }
};
