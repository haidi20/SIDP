import React, {useState, useRef} from 'react';

import { Modal, Button } from 'react-bootstrap';

import './UploadFile.css';

//helpers
import {validateFile} from '../../../supports/Helpers';

const detailDocument = props => {

    const initialState = {
        disabled: true,
        color: '#01A9AC',
        nameFile: 'Upload a file',
    }
    
    const fileInput = useRef(null);
    const [color, setColor]         = useState(initialState.color);
    const [nameFile, setNameFile]   = useState(initialState.nameFile);
    const [disabled, setDisabled]   = useState(initialState.disabled);

    const styled = {
        upload: {
            color: color,
            borderRadius: '8px',
            border: `2px solid ${color}`,
        },
    }

    const closeModal = () => {
        setColor(initialState.color);
        setNameFile(initialState.nameFile);
        setDisabled(initialState.disabled);
        props.setShowModal(false);
    }

    const getFile = (e) => {
        let dataFile = e.target.files[0];

        if(!dataFile) return false;

        console.log(dataFile.type);
        console.log(validateFile(dataFile.type));
        if(validateFile(dataFile.type)){
            setDisabled(false);
            setColor('#01A9AC');
            setNameFile(dataFile.name);
        }else{
            setColor('red');
            setDisabled(true);
            setNameFile('Upload File Hanya Bisa Word/PDf');
        }
    }

    const colorSend = () => {
        return disabled ? 'secondary' : 'success';
    }

    const handleSend = () => {
        console.log('send');
    }

    return(
        <Modal 
            size="md"
            show={props.showModal} 
            onHide={() => closeModal()}
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
                <Button variant="danger" className="pull-left" onClick={() => closeModal()}>
                    Tutup
                </Button>
                <Button variant={colorSend()} disabled={disabled} onClick={() => handleSend()}>
                    Kirim
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default detailDocument;