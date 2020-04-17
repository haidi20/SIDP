import React, {useState, useEffect} from 'react';

//third party
import axios from '../../supports/Axios';
//components
import DataTable from '../_components/DataTable/DataTable';
// helpers
import Config from '../../supports/Config';
import * as Helpers from '../../supports/Helpers';
// partials
import UploadFile from './Partials/UploadFile';
import DetailDocument from './Partials/DetailDocument';

const document = () => {
    const columns       = ['Nomor Surat'];
    const nameRoute     = '/document';
    
    const [document, setDocument]   = useState();
    const [loading, setLoading]     = useState(false);

    const [showModalDetail, setShowModalDetail]         = useState(false);
    const [showModalUpload, setShowModalUpload]         = useState(false);
    const [showModalDatatable, setShowModalDatatable]   = useState(false);

    const addButtonActions = (data) => {
        const listButton = [
            {title: 'Detail Data', color: 'btn-success', icon: 'fa fa-bars', onClick: () => handleDetail(data)},
            {title: 'Upload Data', color: 'btn-warning', icon: 'fa fa-cloud-upload', onClick: () => handleUpload()},
        ]

        return listButton.map((item, index) => 
            <button key={index} title={item.title} className={`btn btn-sm ${item.color}`} onClick={() => item.onClick()}>
                <i className={item.icon}></i>
            </button>    
        )
    }

    const handleDetail = async (data) => {
        // console.log(data);
        setLoading(true);
        setShowModalDetail(true);
        setShowModalDatatable(false);
        await axios({
            method: 'get',
            url: nameRoute+'/edit/'+data.id,
        }).then(res => {
            let result = res.data;

            // console.log(result)
            setDocument(result);
            setLoading(false);
        }).catch(function (response) {
            let result = {
                data: 'Maaf, Ada Kesalahan Sistem',
                status: 500,
            }
            Helpers.alert(result);
        });
    }

    const handleUpload = () => {
        setShowModalUpload(true);
        setShowModalDatatable(false);
    }

    return(
        <div>
            <DetailDocument 
                loading={loading}
                document={document}
                showModal={showModalDetail}
                setShowModal={() => setShowModalDetail()}
            />
            <UploadFile 
                showModal={showModalUpload}
                setShowModal={() => setShowModalUpload()}
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