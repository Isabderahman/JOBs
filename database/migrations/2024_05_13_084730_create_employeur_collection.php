<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeurCollection extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mongodb')->create('employeurs', function (Blueprint $collection) {
            $collection->increments('id');
            $collection->string('prenom');
            $collection->string('nom');
            $collection->string('adresse');
            $collection->unique('email');
            $collection->date('date_naissance');
            $collection->string('mot_de_passe');

            $collection->nested('education', function (Blueprint $collection) {
                $collection->string('diplome');
                $collection->string('institut');
                $collection->date('date_debut');
                $collection->date('date_fin');
                $collection->string('description');
            });

            $collection->nested('experiences', function (Blueprint $collection) {
                $collection->string('poste');
                $collection->string('entreprise');
                $collection->date('date_debut');
                $collection->date('date_fin');
                $collection->string('description');
            });

            $collection->array('competences');

            // Champ ajouté
            $collection->string('telephone');

            $collection->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mongodb')->dropIfExists('employeur');
    }
}
