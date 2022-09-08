import Button from 'react-bootstrap/Button';
import React, {useState} from 'react'
import qrgit from '../imgs/qrgit.png';
import qrlink from '../imgs/qrlink.png';
import qrintagram from '../imgs/qrinstagram.png';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Contato() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const  [qr, setQr] = useState();
    const  [email, setEmail] = useState();
    

    const verificar1 =()=>{
        setQr(qrgit);
        setEmail('https://github.com/Felipe-Gs')
    }

    const verificar3 =()=>{
        setQr(qrintagram);
        setEmail('https://www.instagram.com/_lipe_gs/')
    }
    const verificar4 =()=>{
        setQr(qrlink);
        setEmail('https://www.linkedin.com/in/felipe-gs/')
    }


    
    return (
        <div style={{marginTop:"5%"}}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Escanear</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <img alt='imagem do qrcode' width={150}  src={qr}/>
                        <Button href={email} target='_blanck' size='lg' variant="ligth">{email}</Button>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>


        <div style={{display:'flex', justifyContent:"space-around", marginTop:'2%'}}>
            <FontAwesomeIcon className='icone' onClick={()=>{handleShow() ; verificar1()}} icon={["fab", "github"]} color='white' cursor={'pointer'} size='3x' /> 
            <div >
                <FontAwesomeIcon className='icone' onClick={()=>{handleShow() ; verificar3()}} icon={["fab", "instagram"]} color='white' cursor={'pointer'} size='3x' />
            </div>
            <div>
                <FontAwesomeIcon className='icone' onClick={()=>{handleShow() ; verificar4()}} icon={["fab", "linkedin"]} color='white' cursor={'pointer'} size='3x' />
            </div>
        </div>
        
    </div>
  )
}
