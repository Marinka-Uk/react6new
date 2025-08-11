import { devToolsEnhancer } from '@redux-devtools/extension'
import {legacy_createStore as createStore} from 'redux'

const initialState = {
 tasks: [
   { id: 0, text: "Learn HTML and CSS", completed: true },
   { id: 1, text: "Get good at JavaScript", completed: true },
   { id: 2, text: "Master React", completed: false },
   { id: 3, text: "Discover Redux", completed: false },
   { id: 4, text: "Build amazing apps", completed: false },
 ],
 filters: {
   status: "all",
 },
 }
// {
//     type: 'tacks/addTascks'
// }
export const addTascks = (newTask)=>{
    return {
        type : 'tascks/addTascks',
        playload  : newTask,
    }
}




const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'tacks/addTascks':
            return state
              case 'tacks/deleteTascks':
                return state

                default: 
                return state
    }
return state
}

const enhancer = devToolsEnhancer()


export const store = createStore(rootReducer, enhancer)