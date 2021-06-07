import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addToTask } from '../Redux/Action'

const AddTask = () => {

    const [desc, setDesc] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setDesc(e.target.value);
    };

    const Add = (e) => {
        e.preventDefault();
        dispatch(addToTask({
            id: Math.random(),
            description: desc,
            isDone: false,
        }));
        setDesc("");
    };

    return (
        <div>
            <div class="row m-1 p-4">
                <div class="col">
                    <div className="title1" class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                      
                        <u className="title"  style={{ fontSize: '2.8rem', textDecoration:'none' }}>  <i className="title"  class="fas fa-check-double "></i> My Todo</u>
                    </div>
                </div>
            </div>
            <div class="row m-1 p-3">
                <div class="col col-11 mx-auto">
                    <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                        <div class="col">
                            <input
                                class="form-control form-control-lg border-0 add-task-input bg-transparent rounded"
                                type="description"
                                placeholder="Add new task..."
                                onChange={handleChange}
                                value={desc}
                            />
                        </div>
                
                        <div class="col-auto px-0 mx-0 mr-2 btnADD">
                            <button  type="button" class="btn btn-primary" onClick={Add}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTask
