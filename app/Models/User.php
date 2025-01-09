<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function faqs(){
        return $this->hasMany(Faq::class);
    }

    public function general(){
        return $this->belongsTo(GeneralSetting::class, 'id', 'user_id');
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

    public function package(){
        return $this->belongsTo(Package::class, 'package_id', 'id');
    }

    public function partners(){
        return $this->hasMany(Partner::class);
    }

    public function portfolios(){
        return $this->hasMany(Portfolio::class);
    }

    public function posts(){
        return $this->hasMany(Post::class);
    }

    public function services(){
        return $this->hasMany(Service::class);
    }

    public function selected_template(){
        return $this->belongsTo(Template::class, 'template', 'frontend');
    }
}
