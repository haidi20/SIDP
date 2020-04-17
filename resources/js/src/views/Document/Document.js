import React, {useState, useEffect} from 'react';

//third party
import axios from '../../supports/Axios';
import { Modal, Button } from 'react-bootstrap';
//components
import DataTable from '../_components/DataTable/DataTable';
// helpers
import Config from '../../supports/Config';
import * as Helpers from '../../supports/Helpers';
// partials
import DetailDocument from './Partials/DetailDocument';

const document = () => {
    const columns       = ['Nomor Surat'];
    const nameRoute     = '/document';
    
    const [document, setDocument]   = useState();
    const [showModal, setShowModal] = useState(false);

    const [showModalDatatable, setShowModalDatatable] = useState(false);

    const addButtonActions = (data) => {
        return (
            <button title="Detail Data" className="btn btn-sm btn-success" onClick={() => handleDetail(data)}>
                <i className="fa fa-bars"></i>
            </button>
        )
    }

    const handleDetail = async (data) => {
        // console.log(data);
        await axios({
            method: 'get',
            url: nameRoute+'/edit/'+data.id,
        }).then(res => {
            let result = res.data;

            // console.log(result)
            setShowModal(true);
            setDocument(result);
            setShowModalDatatable(false);
        }).catch(function (response) {
            let result = {
                data: 'Maaf, Ada Kesalahan Sistem',
                status: 500,
            }
            Helpers.alert(result);
        });
    }

    return(
        <div>
            <DetailDocument 
                document={document}
                showModal={showModal}
                setShowModal={() => setShowModal()}
            />
            <div className="page-header">
                <div className="row">
                    <div className="col-md-10">
                        <div className="page-header-title">
                            <div className="d-inline">
                                <h4>Dokumen</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="card">
                            <div className="card-block">
                                <DataTable
                                    usePopup
                                    columns={columns}
                                    nameRoute={nameRoute}
                                    url={Config.baseUrl + nameRoute} 
                                    addButtonActions={(data) => addButtonActions(data)}

                                    // modal datatable
                                    showModal={showModalDatatable}
                                    setShowModal={(e) => setShowModalDatatable(e)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default document;