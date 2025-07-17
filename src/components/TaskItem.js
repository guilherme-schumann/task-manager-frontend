import { useEffect } from "react";

const TaskItem = ({ task }) => {
    useEffect(() => {
        console.log("Component was mounted!");

        return () => {
            console.log("I will unmount!");
        };
    }, []);

    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Completa" : "Não Completa"}</p>
        </>
    );
};

export default TaskItem;

// import React from "react";
// class TaskItem extends React.Component {
//     componentDidMount() {
//         console.log("Component is mounted!");
//     }

//     componentWillUnmount() {
//         console.log("I will unmount!");
//     }
//     render() {
//         const { task } = this.props;
//         return (
//             <>
//                 <h1>{task.description}</h1>
//                 <p>{task.isCompleted ? "Completa" : "Não Completa"}</p>
//             </>
//         );
//     }
// }

// export default TaskItem;
