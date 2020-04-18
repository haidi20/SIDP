import React, {useState, useRef} from 'react';

import { Modal, Button } from 'react-bootstrap';

import './UploadFile.css';

//helpers
import {validateFile} from '../../../supports/Helpers';

const detailDocument = props => {

    const fileInput                 = useRef(null);
    const [color, setColor]         = useState('#01A9AC');
    const [nameFile, setNameFile]   = useState('Upload a file');

    const styled = {
        upload: {
            color: color,
            borderRadius: '8px',
            border: `2px solid ${color}`,
        },
    }

    const getFile = (e) => {
        let dataFile = e.target.files[0];

        console.log(dataFile.type);
        console.log(validateFile(dataFile.type));
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
                    <button className="btn-upload" onClick={() => fileInput.current.click()} style={styled.upload}>{nameFile}</button>
                    {/* <p className="name-file">{nameFile}</p> */}
                    <input type="file" ref={fileInput} name="myfile" onChange={e => getFile(e)} />
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