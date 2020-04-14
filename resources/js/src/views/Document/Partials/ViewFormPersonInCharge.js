import React from 'react';
import Select from '../../_components/Select';

const viewFormPersonInCharge = (props) => {

    const showFormPerson = 
        props.state.more_person 
        ?   <div className="form-group row">
                <div className="col-sm-4">
                    <Select 
                        {...props}
                        required={props.state.more_person}
                        url={props.fetchPersonInCharge}
                        name="person_in_charge_one"
                        label="Pejabat PaHP 1"
                        onChange={e => props.handleChoosePerson(e, 'person_in_charge_one')}
                    />
                </div>
                <div className="col-sm-4">
                    <Select 
                        {...props}
                        required={props.state.more_person}
                        url={props.fetchPersonInCharge}
                        name="person_in_charge_two"
                        label="Pejabat PaHP 2"
                        onChange={e => props.handleChoosePerson(e, 'person_in_charge_two')}
                    />
                </div>
                <div className="col-sm-4">
                    <Select 
                        {...props}
                        required={props.state.more_person}
                        url={props.fetchPersonInCharge}
                        name="person_in_charge_three"
                        label="Pejabat PaHP 3"
                        onChange={e => props.handleChoosePerson(e, 'person_in_charge_three')}
                    />
                </div>
            </div>
        :   <div className="form-group row">
                <div className="col-sm-4">
                    <Select 
                        {...props}
                        required
                        label="Pejabat PaHP 1"
                        name="person_in_charge_one"
                        url={props.fetchPersonInCharge}
                        onChange={e => props.handleChoosePerson(e, 'person_in_charge_one')}
                    />
                </div>
            </div>;

    return (
        <div>
            {showFormPerson}
        </div>
    )
}

export default viewFormPersonInCharge;