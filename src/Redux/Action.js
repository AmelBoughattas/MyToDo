import { ADD_TASK,DELETE_TASK,DONE_TASK,EDIT_TASK,EDITABLE} from './Type'

export const addToTask = (newTask)=>{
    return  {
        type: ADD_TASK,
        payload : newTask,
    };
};

export const deleteToTask = (idTask)=>{
    return  {
        type: DELETE_TASK,
        payload : idTask,
    };
};

export const DoneTask = (idTask)=>{
    return  {
        type: DONE_TASK,
        payload : idTask,
    };
};

export const EditTask =(idTask) =>{
    return {
        type: EDIT_TASK,
        payload : idTask,
    };
};

export const Editable =(idTask) =>{
    return {
        type: EDITABLE,
        payload : idTask,
    };
};