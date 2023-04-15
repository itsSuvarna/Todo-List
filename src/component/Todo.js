import React,{useState,useEffect} from 'react';
import './Todo.css';



function Task({ task, index, completeTask, removeTask }) {
    return (
    /*2*/    <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            <button onClick={() => completeTask(index)}>Complete</button>

        </div>
    );
}
/*4*/
function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

/*1*/function Todo() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    
        const [tasks ,setTasks] = useState([
            {tittle:"basic study of react" ,completed:true}
            {tittle:"study of hook in react" ,completed:true}
            {tittle:"small project" ,completed:false}
            {tittle:"some extra concept in react" ,completed:false}
        ]);
    

    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div className="tasks">
/*3*/            {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default Todo;

/*function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">TODO - ITEMS</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

/*function Task({task}){
    return(
        <div className="task" style={{textDecoration:task.completed ? "line-through":""}}>
            {task.tittle}
        </div>
    );
    function CreateTask({ addTask }) {
        const [value, setValue] = useState("");
    
        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            
            addTask(value);
            setValue("");
        }
        
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        );
    }

}
function Todo(){
    const []
    const [tasks,settasks] = useState([
        {
            tittle:"Grab some Pizza",
            completed:true
        },
        {
            tittle:"Do your workout",
            completed:true
        },
        {
            tittle:"Hangout with friends",
            completed:false
        }
    ]);
    const addTask = tittle =>{
        const newTasks = [...tasks,{ tittle, completed:false}];
        settasks(newTasks);
    };
    return (
        <div  className="todo-container">
            <div className="header">Todo-ITEMS</div>
            <div className ="tasks">
                {tasks.map((task,index) =>(
                 <Task task={task} index={index} key={index}/>
                ))}
            </div>
            <div className="create-task">
                <CreateTask addTask ={ addTask}/>
            </div>
        </div>
    );
}*/

//export default Todo;