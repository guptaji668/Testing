 import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    todos:[],
    total:0,
 }

 const todoSlice =createSlice({
    
    name:'todo',
    initialState,
    reducers:{
        addTodo(state , payload){
            state.todos.push({ id: Date.now(), text: action.payload, completed: false })

        },

        toggleTodo: (state, action) => {
            const todo = state.items.find(todo => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
        },

        deleteTodo: (state, action) => {
            const index = state.items.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
              state.items.splice(index, 1);
            }
          }
    }

 })
 export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;