import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({fetchTasks}) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return toast.error(
                    "A tarefa precisa de uma descrição para ser adicionada"
                );
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });

            await fetchTasks();

            setTask("");

            await toast.success("A tarefa foi adicionada com sucesso!");
        } catch (error) {
            toast.error("Algo deu errado.");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa ..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#FFFFFF" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
