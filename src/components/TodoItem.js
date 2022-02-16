import React, {useState} from "react";
import taskApiService from "../services/taskApiService";

const TodoItem = ({task, getAllTasks}) => {
    const [editable, setEditable] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);

    const deleteTask = (task_id) => {
        taskApiService.delete({task_id: task_id})
            .then(res => {
                getAllTasks();
            })
            .catch(err => {
                alert("Failed, Please Try Again");
            })
    }

    const updateTask = (task_id, description) => {
        taskApiService.update({task_id: task_id, description: description})
            .then(res => {
                getAllTasks();
            })
            .catch(err => {
                alert("Failed, Please Try Again");
            })
    }

    return (
        <div>
            <div
                className="row mx-2 align-item-center"
                style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    marginTop: "20px",
                }}
            >
                <div
                    className="col"
                    style={{
                        marginTop: "10px",
                    }}
                >
                    {editable ? (
                        <input
                            type="texte"
                            classeName="form-contol"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                    ) : (
                        <h4>{task.description}</h4>
                    )}
                </div>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        setEditable(!editable);
                        if (editable) {
                            updateTask(task._id, newDescription);
                        }
                    }}
                >
                    {editable ? "Update" : "Edit"}
                </button>
                <button
                    onClick={() => deleteTask(task._id)}
                    className="btn btn-danger m-2"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
