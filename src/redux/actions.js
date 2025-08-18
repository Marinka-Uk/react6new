export const addTasks = (newTask) =>{
    return {
        type: 'tasks/addTascks',
        payload: newTask,
}
}


export const deleteTasks = (idTask)=>{
    return {
        type: 'tasks/deleteTascks',
        payload: idTask,
    }
}


export const toggleComplete = (idTask)=>{
 return {
        type: 'tasks/toggleComplete',
        payload: idTask,
    }

}


export const filterTasks = (statusFiter)=>{
 return {
        type: 'tasks/changeFilter',
        payload: statusFiter,
    }

}