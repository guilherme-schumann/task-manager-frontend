import "./TaskItem.scss";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const TaskItem = ({ task, fetchTasks }) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`);

            await fetchTasks();

            toast.success("Tarefa excluída com sucesso!");
        } catch (error) {
            toast.error("Não foi possível excluir a tarefa!");
        }
    };

    const handleTaskComplitionChange = async (e) => {
        try {
            await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
                isCompleted: e.target.checked,
            });

            await fetchTasks();

            toast.success("Status da tarefa foi atualizada com sucesso!");
        } catch (error) {
            toast.error("Não foi possível mudar o status da tarefa!");
        }
    };

    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label
                        className={
                            task.isCompleted
                                ? "checkbox-container-completed"
                                : "checkbox-container"
                        }
                    >
                        {task.description}
                        <input
                            type="checkbox"
                            defaultChecked={task.isCompleted}
                            onChange={(e) => handleTaskComplitionChange(e)}
                        />
                        <span
                            className={
                                task.isCompleted
                                    ? "checkmark completed"
                                    : "checkmark"
                            }
                        ></span>
                    </label>
                </div>
                <div className="delete">
                    <MdDelete
                        size={18}
                        color="#F97474"
                        onClick={handleTaskDeletion}
                    />
                </div>
            </div>
        </>
    );
};

export default TaskItem;
