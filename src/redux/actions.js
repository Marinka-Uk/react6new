export const addTascks = (newTask) =>{
    return {
        type: 'tasks/addTascks',
        payload: newTask,
}
}


export const deleteTascks = (idTask)=>{
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


export const filterTascks = (statusFiter)=>{
 return {
        type: 'tasks/changeFilter',
        payload: statusFiter,
    }

}