import React, {useEffect, useState} from "react";
import TodoItem from "./TodoItem";
import TaskApiService from "../services/taskApiService";
import TodoInputs from "./TodoInputs";

const TodoList = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks();
    }, []);

    const getAllTasks = () => {
        TaskApiService.find()
            .then(res => {
                setTasks(res.data.data);
            })
            .catch(err => {
                alert("Failed, Please Try Again")
            })
    }

    if (tasks && tasks.length !== 0) {
        return (
            <div>
                <TodoInputs getAllTasks={getAllTasks}/>
                <div className="my-8">
                    {tasks.map((task) => {
                        return <TodoItem key={task._id} task={task} getAllTasks={getAllTasks}/>;
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div>
             <h3>You Have No Tasks, Please add One</h3>
            <TodoInputs getAllTasks={getAllTasks}/>
        </div>
        )
    }
}

export default TodoList;
