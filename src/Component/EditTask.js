 import React, { useState } from 'react'
import './style.css'
import { Modal } from 'react-bootstrap'
import { FiEdit } from 'react-icons/fi'
import { useDispatch } from 'react-redu';
import { EditTask } from '../Redu/Action'

const EditTask = ({ el, EditTask }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const dispatch = useDispatch();
    const edit = (e) => {
        dispatch(EditTask({
            id: el.id,
            description: editInput,
        }))
        e.preventDefault();
        handleClose();
    }

    return (
        <>
            <FiEdit onClick={handleOpen} />


            <Modal className="my-modal" show={show} onHide={handleClose} animation={false}  >

                <Modal.Header closeButton style={{ backgroundColor: '  rgb(1 35 90)' }}>
                    <Modal.Title style={{ color: 'white' }}>Modal heading</Modal.Title>
                </Modal.Header>
                
                <Modal.Body className="my-modal" style={{ backgroundColor: '  rgb(1 35 90)' }}>

                    <input
                        type='tet'
                        placeholder='edit task'
                        value={editInput}
                        required
                        className="task-input"
                        onChange={(e) => setEditInput(e.target.value)}
                    />

                </Modal.Body>

                <Modal.Footer style={{ backgroundColor: ' rgb(1 35 90)' }} >

                 
                    <button className='task-button' onClick={(editInput.trim() !== '' ? edit : editInput)} >
                        Save
                    </button>

                    
                    <button className='task-button' style={{ borderRadius: '4p', padding: '10p', margintop: '20p' }} onClick={handleClose} >
                        Cancel
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditTask
 