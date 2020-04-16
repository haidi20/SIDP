import React from 'react';

//components
import DataTable from '../_components/DataTable/DataTable';
// helpers
import Config from '../../supports/Config';

const document = () => {
    const columns   = ['Nomor Surat'];
    const nameRoute = '/document';

    const addButtonActions = data => {
        return (
            <button title="Detail Data" className="btn btn-sm btn-success" >
                <i className="fa fa-bars"></i>
            </button>
        )
    }

    return(
        <div>
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
                                    addButtonActions={data => addButtonActions(data)}
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