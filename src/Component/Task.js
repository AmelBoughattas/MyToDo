import React from "react";
import './style.css';
import { useDispatch } from "react-redux";
import Reducer from '../Redux/Reducer'
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteToTask, DoneTask, EditTask, Editable } from "../Redux/Action";

const Task = ({ task }) => {


    const dispatch = useDispatch();
    const [name, setName] = useState(task.description);

    const editor = () => {
        dispatch(EditTask({ id: task.id, selected: name, isDone: task.isDone }),
            handleClose()
        );
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    {
        console.log(name);
    }
    
    return (
        <div>
            <Modal className="modal" show={show} onHide={handleClose}  >
                <Modal.Body className="my-modal"  >
                    <Modal.Header >
                        <Modal.Title style={{ color: 'white', marginBottom: '20px', fontSize: '50px' }} closeButton>Edit a task</Modal.Title>
                    </Modal.Header> 

                    <div class="col px-1 m-1 d-flex align-items-center">
                        <input className="input_Change"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                    <Button className="task-button" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="task-button btnSve" variant="primary" onClick={editor}>
                        Save 
                    </Button></div>
                </Modal.Body>
               {/*  <Modal.Footer>
                  
                </Modal.Footer> */}
            </Modal>

            <div class="row mx-1 px-5 pb-3 w-80">
                <div class="col mx-auto">
                    <div class="row px-3 align-items-center task-item rounded">
                        <div class="col-auto m-1 p-0 d-flex align-items-center">
                            <h2 class="m-0 p-0" id="checklist">

                                <i
                                    class="far fa-check-circle text-primary btn m-0 p-0 icon "
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Mark as todo"
                                    onClick={() => dispatch(DoneTask(task.id))}
                                ></i>
                            </h2>
                        </div>
                        <div class="col px-1 m-1 d-flex align-items-center">
                            <input
                                type="text"
                                className={
                                    task.isDone
                                        ? " form-control form-control-lg border-0 edit-task-input bg-transparent rounded px-3 done"
                                        : "undone form-control-lg form-control border-0 bg-transparent rounded px-3 edit-task-input"
                                }
                                readonly
                                value={task.description}
                            />
                        </div>
                        <div class="col-auto m-1 p-0 px-3 d-none"></div>
                        <div class="col-auto m-1 p-0 task-actions">
                            <div class="row d-flex align-items-center justify-content-end">
                                <h5 class="m-0 p-0 px-2">

                                    <i
                                        class="fas fa-pencil-alt text-info icon"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Edit task"
                                        onClick={handleShow}
                                    ></i>
                                </h5>
                                <h5 class="m-0 p-0 px-2">
                                    <i
                                        class="fa fa-trash-o text-danger btn m-0 p-0 icon"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Delete task"
                                        onClick={() => dispatch(deleteToTask(task.id))}
                                    ></i>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {console.log(task)}</div>
    );
};


export default Task;
