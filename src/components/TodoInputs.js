import React, {useState} from "react";
import taskApiService from "../services/taskApiService";

const TodoInputs = ({getAllTasks}) => {
    const [name, setName] = useState();

    const saveTask = (task) => {
        if(task?.description === undefined || task?.description?.length === 0) {
            alert("Please fulfill the field before submitting")
        } else {
            taskApiService.save(task)
                .then(() => {
                    getAllTasks();
                })
                .catch(err => {
                    alert("Failed, Please Try Again")
                })
        }
    }

    return (
        <div>
            <div className="row m-2">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="col form-control"
                    placeholder="Add a Task"
                />
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        saveTask({description: name})
                        setName("");
                    }}
                >
                    ADD NEW TASK
                </button>
            </div>
        </div>
    );
}

export default TodoInputs;
