const tasks=[
    {        
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th',
        reminder:true,
    }
];

const Tasks = () => {
    return (
        <>
            {tasks.map((task)=>
            (
                <h3 key={task.key}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
