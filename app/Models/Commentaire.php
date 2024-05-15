<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commentaire extends Model
{
    use HasFactory;
    protected $collection = 'commentaires';

    public function offre()
    {
        return $this->belongsTo('App\Models\Offre');
    }

    public function utilisateur()
    {
        return $this->belongsTo('App\Models\Utilisateur');
    }
}
