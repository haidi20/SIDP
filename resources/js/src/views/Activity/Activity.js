import React from 'react';

//components
import DataTable from '../_components/DataTable/DataTable';
// helpers
import Config from '../../supports/Config';

const activity = () => {
    const columns   = ['Nama', 'Kode'];
    const nameRoute = '/activity';

    return(
        <div>
            <div className="page-header">
                <div className="row">
                    <div className="col-md-10">
                        <div className="page-header-title">
                            <div className="d-inline">
                                <h4>Kegiatan</h4>
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
                                    columns={columns}
                                    nameRoute={nameRoute}
                                    url={Config.baseUrl + nameRoute} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default activity;