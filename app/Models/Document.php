<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $dates    = ['time_in_charge'];
    protected $appends  = ['set_contract_value', 'set_time_in_charge'];

    public function job()
    {
        return $this->belongsTo('App\Models\Job');
    }

    public function activity()
    {
        return $this->belongsTo('App\Models\Activity');
    }

    public function personChargeOne()
    {
        return $this->belongsTo('App\Models\PersonCharge', 'person_in_charge_one');
    }

    public function personChargetwo()
    {
        return $this->belongsTo('App\Models\PersonCharge', 'person_in_charge_two');
    }

    public function personChargeThree()
    {
        return $this->belongsTo('App\Models\PersonCharge', 'person_in_charge_three');
    }

    public function ableColumnSearch()
    {
        return ['number_letter'];
    }

    public function scopeSearch($query)
    {
        foreach($this->ableColumnSearch() as $item){
            $query->orWhere($item, 'like', '%'.request('search').'%');
        }
    }

    public function scopeAllRelation($query)
    {
        return $query->with(
            'job', 'activity', 
            'personChargeOne', 'personChargeTwo', 'personChargeThree'
        );
    }

    public function getSetContractValueAttribute()
    {
        return 'Rp. '.format_money($this->contract_value);
    }

    public function getSetTimeInChargeAttribute()
    {
        return $this->time_in_charge->format('m/d/Y');
    }
}
