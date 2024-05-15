<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Candidat extends Model
{
    use HasFactory;
    protected $collection = 'candidats';

    public function offres(): BelongsToMany
    {
        return $this->belongsToMany(Offre::class);
    }
}
