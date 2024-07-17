import {createSlice} from '@reduxjs/toolkit'

const initialState = {
       longTodos : [],
}

export const longTermSlice = createSlice({
       name : "LongTermGoal",
       initialState,
       reducers : {
              addTodoLong : (state,action) => {
                     const item = {
                            id : Date.now(),
                            content : action.payload
                     }
                     state.longTodos.push(item)
              },
              removeTodoLong : (state,action) => {
                     state.longTodos = state.longTodos.filter(item => item.id !== action.payload)
              }
       }
})

export const {addTodoLong,removeTodoLong} = longTermSlice.actions

export default longTermSlice.reducer