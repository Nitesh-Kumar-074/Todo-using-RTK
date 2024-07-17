import {createSlice} from '@reduxjs/toolkit'

const initialState = {
       shortTodos : []
}

export const shortTermSlice = createSlice({
       name : 'ShortTermGoal',
       initialState,
       reducers: {
              addTodoShort : (state,action) => {
                     const item = {
                            id : Date.now(),
                            content : action.payload
                     }
                     state.shortTodos.push(item)
              },
              removeTodoShort : (state,action) => {
                     state.shortTodos = state.shortTodos.filter((item) => item.id !== action.payload )
              }
       }
})

export const {addTodoShort,removeTodoShort} = shortTermSlice.actions

export default shortTermSlice.reducer