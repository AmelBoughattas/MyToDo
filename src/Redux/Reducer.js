
import { ADD_TASK, DELETE_TASK,DONE_TASK,EDIT_TASK,EDITABLE } from "./Type";

const initialeTask ={
    tasks:[
        { id:1, description:"Cours Redux", isDone:true, editable:true },
        { id:2, description:"Workshop Redux", isDone:false, editable:false },
        { id:3, description:"Challenge Redux", isDone:false, editable:false },
    ]
}
const Reducer=(state=initialeTask ,action)=>{
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks : [ ...state.tasks, action.payload]
             };
        case DELETE_TASK:
           return { ...state, tasks:[...state.tasks.filter((task)=>task.id !==action.payload)] };
        
        case DONE_TASK:
        return { ...state, tasks:state.tasks.map((task)=>
                   task.id === action.payload ? {...task, isDone : !task.isDone }
                                              :task
                                              ),
                 };
    
        case EDIT_TASK:
          return { ...state, tasks:state.tasks.map((task)=>
            task.id === action.payload.id ? {...task, 
              description: action.payload.selected,
              editable: !task.editable,
            } :task
          ),
        }

        case EDITABLE :
          return { ...state, tasks: state.tasks.map((task)=>
               task.id === action.payload ? { ...task, editable : !task.editable}
                                          : task  ),
        };
            
        default:
           return state;
    }
};
export default Reducer