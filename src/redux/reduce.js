import {initialState} from './store.js'


export const rootReducer = (state = initialState, action)=>{
switch (action.type){
    case 'tasks/addTascks':
        return {...state, tasks:[...state.tasks, action.payload]}
         case 'tasks/deleteTascks':
        return  {...state, tasks:[...state.tasks.filter((task)=>task.id !== action.payload),]}
         case 'tasks/toggleComplete':
        return state
 case 'tacks/checkTascks':
        return {...state, tasks: [state.tasks.map((task)=>{
task.id === action.payload ? {...task, completed :!task,completed}
:task;
        }),
    ],
};

         case 'filters/changeFilters':
        return {... state, filters:{ status: action.payload,
        }, };

        default: 
        return state
}}

