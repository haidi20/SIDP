import React, {useState} from 'react';

//components
import DataTable from '../_components/DataTable/DataTable';

const peronInCharge = () => {
    const columns = ['Nama', 'NIP'];
    const nameRoute = '/person-in-charge';

    const [showModal, setShowModal]   = useState(false);

    return(
        <div>
            <div className="page-header">
                <div className="row">
                    <div className="col-md-10">
                        <div className="page-header-title">
                            <div className="d-inline">
                                <h4>Pejabat PaHP</h4>
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
                                    url={nameRoute} 
                                    columns={columns}
                                    nameRoute={nameRoute}
                                    showModal={showModal}
                                    setShowModal={(e) => setShowModal(e)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default peronInCharge;