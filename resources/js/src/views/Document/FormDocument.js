import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';


//helpers
import Config from '../../supports/Config';
import * as Helpers from '../../supports/Helpers';
//third party
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';

// views
import ViewFormDocument from './ViewFormDocument';

const formDocument = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors, setValue } = useForm({
        defaultValues:{
            contract_value: "Rp. 20.000.000",
            date_agreement_letter: '01 Juni 2019',
            number_agreement_letter: 'Perjanjian/SPK/SPB 010/SPK/SMP/6/2019',
        }
    });
    const [job, setJob]                     = useState({});
    const [activity, setActivity]           = useState({});
    const [formatDate, setFormatDate]       = useState('YYYY-MM-DD');
    const [sequenceLetter, setSequenceLetter]= useState(0);
    const [numberLetter, setNumberLetter]   = useState('');
    const [timeInCharge, setTimeInCharge]   = useState();
    const [dateAgreement, setDateAgreement] = useState();
    const [contractValue, setContractValue] = useState();
    const [state, setState] = useState({
        person_in_charge: {
            person_in_charge_one: null,
            person_in_charge_two: null,
            person_in_charge_three: null,
        },
        more_person: false,
    });

    useEffect(() => {
        setValue('time_in_charge', moment().format(formatDate));
        setTimeInCharge(moment().format(formatDate));
    }, []);

    useEffect(() => {
        handleNumberLetter();
    }, [timeInCharge, activity, numberLetter, sequenceLetter, job]);

    const handleNumberLetter = () => {
        let year            = moment(timeInCharge).format('YY');
        let date            = moment(timeInCharge).format('DD');
        let month           = moment(timeInCharge).format('MM');
        let codeActivity    = activity.otherData !== undefined 
                                ? activity.otherData.code 
                                : '00.00';
        let codeJob         = job.lastCode !== undefined 
                                ? job.lastCode
                                : '00.00';

        let resultNumberLetter = 'No.'+month+date+sequenceLetter;
        resultNumberLetter    += '/BA-PPHP/DP/'+codeJob+'/'+codeActivity;
        resultNumberLetter    += '/'+month+'/'+year;
        // setNumberLetter(resultNumberLetter);
        setValue('number_letter', resultNumberLetter);
    }

    const handleSetActivity = e => {
        if(e !== null){
            setActivity(e);
            setValue('name_activity', e.otherData.name);
            setValue('number_dpa', '1.01.01.'+e.otherData.code);
        }else{
            setActivity({});
            setValue('name_activity', null);
            setValue('number_dpa', null);
        }
    }

    const handleSetTimeInCharge = e => {
        if(e !== null){
            setTimeInCharge(moment(e).format(formatDate));
        }
    }
    
    const handleSetJob = e => {
        e.lastCode = Helpers.wordLimit(e.label, 6, 'back');
        if(e !== null){
            setJob(e);
            setValue('name_work', e.otherData.name);
        }else{
            setJob({});
        }
    }

    const handleChoosePerson = (selected, name) => {
        // kadang suka pakai select biasa tau react-select
        // const value = selected.value ? selected.value : selected.target.value;
        let value = selected.value;

        setState({
            ...state,
            person_in_charge: {
                ...state.person_in_charge,
                [name]: value,
            }
        });
    }   

    const handleFormPerson = e => {
        setState({
            ...state,
            person_in_charge: {
                person_in_charge_one: null,
                person_in_charge_two: null,
                person_in_charge_three: null,
            },
            more_person: !state.more_person
        });
    }

    const handleSetContractValue = e => {
        let formatRupiah = Helpers.formatRupiah;
        let number = formatRupiah(e.target.value, 'Rp. ');
        e.target.value = number;
    }

    useEffect(() => {
        fetchSequenceLetter();
    }, [timeInCharge]);

    const fetchSequenceLetter = async () => {
        await axios({
            method: 'get',
            url: Config.baseUrl + '/document/sequence-letter',
            params:{time_in_charge: timeInCharge},
        }).then(res => {
            setSequenceLetter(res.data);
        }).catch(function (response) {
            let result = {
                data: 'Maaf, Ada Kesalahan Sistem',
                status: 500,
            }

            Helpers.alert(result);
        });
    }
    
    useEffect(() => {
        setDateAgreement(moment().format(formatDate));
    }, []);

    const handleSetDateAgreement = e => {
        if(e !== null){
            setDateAgreement(moment(e).format(formatDate));
        }
    }
    
    const handleSend = data => {
        // console.log(data);
        data.time_in_charge         = timeInCharge;
        data.contract_value         = Helpers.removeFormatRupiah(data.contract_value);
        data.sequence_letter        = sequenceLetter;
        data.date_agreement_letter  = dateAgreement;

        const sameChoice = Object
                .keys(data)
                .some(item => {
                    return Helpers.sameChoice(item, state);
                });

        if(!sameChoice){
            axios({
                method: 'post',
                url: Config.baseUrl + '/document/store',
                params: data,
            }).then(res => {
                let result = res.data;

                let alert = Helpers.alert(result);

                if(alert == 200){
                    window.open(Config.baseUrl + '/document/file/'+result.id, '_blank', "width=1, height=1");
                    
                    setTimeout(() => {
                        history.push("/document");
                    }, 2000);
                }
            }).catch(function (response) {
                let result = {
                    data: 'Maaf, Ada Kesalahan Sistem',
                    status: 500,
                }
    
                Helpers.alert(result);
            });
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'Pilihan penanggung jawab ada yang sama.',
            });
        }       
    }

    const handleError = (name, tag) => Helpers.handleError(name, tag, errors, {...state});

    const messageError = (name, label) => Helpers.messageError(name, label, errors, {...state});

    const passing = {
        state:state,
        // start from useForm
        watch: watch,
        errors: errors,
        register:value => register(value),
        setValue: value => setValue(value),
        handleSubmit:value => handleSubmit(value),
        // end from useForm
        // start important function 
        handleError:(name, tag) => handleError(name, tag),
        messageError:(name, label) => messageError(name, label),
        // end important function
        handleSend:value => handleSend(value),
        handleFormPerson:value => handleFormPerson(value),
        handleContractValue: value => handleContractValue(value),
        handleChoosePerson:(value, name) => handleChoosePerson(value, name),
        // another state all
        numberLetter: numberLetter,
        contractValue: contractValue,
        handleSetJob: e => handleSetJob(e),
        handleSetActivity: e => handleSetActivity(e),
        handleSetTimeInCharge: e => handleSetTimeInCharge(e),
        handleSetContractValue: e => handleSetContractValue(e),
        handleSetDateAgreement: e => handleSetDateAgreement(e),
        // get data from another table
        fetchWork: Config.baseUrl+'/job/fetch-data',
        fetchActivities: Config.baseUrl+'/activity/fetch-data',
        fetchPersonInCharge: Config.baseUrl+'/person-in-charge/fetch-data',
    }

    return(
        <ViewFormDocument 
            {...passing}
        />
    )
}

export default formDocument;