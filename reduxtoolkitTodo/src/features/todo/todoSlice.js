import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    
    todos:[
        //Object in array
        {
            id:1,
            text:"This is a default text ,Feel free to delete!"
        }
    ]
}

// making slices
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid() ,
                text:action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        //Assignment..
        // updateTodo:(state ,action) => {
        //     console.log('Updating Todo:', action);
        //     state.todos = state.todos.filter((todo)=>{
        //         if(todo.id == action.id){
        //             return {...todo, ...action.payload}
        //         }
        //     return todo;
        //     })
        // },

    }
})

//export functionality
export const{addTodo,removeTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer
