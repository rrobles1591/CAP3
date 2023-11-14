import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Singleservice = ({ type, description, image }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <div className='service container align-items-center'>
        <h1>{type}</h1>
        <img src={image} 
        width={400} height={300}>
        </img>
        <div>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button></div></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={image} width={400} height={300}/><div>{description}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
