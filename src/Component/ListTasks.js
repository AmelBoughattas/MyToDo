import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Task from './Task';
import Reducer from '../Redux/Reducer' 

const ListTasks = () => {

    const tasks = useSelector((state) => state.tasks);

    const [done,setDone] =useState(false);
    const [active,setActive]=useState(false);
    const [all,setAll] = useState(false);
    

    console.log("done :" + done);    
    console.log("active :" + active);
    console.log("all :" + all);
    
    const handleDone = ()=>{
        setDone(!done);
        setActive(false);
        setAll(false);
    };

    const handleActive =()=>{
        setActive(!active);
        setDone(false);
        setAll(false);
    };

    const handleAll = ()=>{
        setAll(!all);
        setDone(false)
        setActive(false);
    };

    return (
        <div>{" "}
           <div>
            <ButtonGroup   aria-label="Basic example">
                <Button className="show" variant="secondary" onClick={handleAll}>Show ALL</Button>
                {" "}
                <Button className="show" variant="secondary" onClick={handleDone}>Show Done</Button>
                {" "}
                <Button className="show" variant="secondary" onClick={handleActive}>Show Active </Button>
                {" "}
            </ButtonGroup>{" "}
           {done 
             ? tasks 
                .filter((element) => element.isDone === true)
                .map((el) => <Task task={el} />)
            :active
            ? tasks
            .filter((element) => element.isDone===false)
            .map((el)=> <Task task={el}/>)
            :all
            ? tasks.map((el)=> <Task task={el}/>)
            : tasks.map((el)=> <Task task={el}/>) }
            </div>
        </div>
    )
}

export default ListTasks
