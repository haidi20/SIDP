import React, {useState} from 'react';

import { Modal, Button } from 'react-bootstrap';

import './UploadFile.css';

const detailDocument = props => {

    const [nameFile, setNameFile] = useState('Upload a file');

    const handleUploadFile = (e) => {
        let dataFile = e.target.files[0];
        
        setNameFile(dataFile.name);
    }

    return(
        <Modal 
            size="md"
            show={props.showModal} 
            onHide={() => props.setShowModal(false)}
        >
            {/* <Modal.Header closeButton> */}
            <Modal.Header>
                <Modal.Title>Upload File</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{textAlign: 'center'}}>
                <div className="upload-btn-wrapper">
                    <button htmlFor="myFile" className="btn-upload">{nameFile}</button>
                    {/* <p className="name-file">{nameFile}</p> */}
                    <input type="file" id="myFile" name="myfile" onChange={e => handleUploadFile(e)} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="pull-left" onClick={() => props.setShowModal(false)}>
                    Tutup
                </Button>
                <Button variant="success">
                    Kirim
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default detailDocument;