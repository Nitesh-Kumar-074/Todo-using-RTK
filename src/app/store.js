import {configureStore} from '@reduxjs/toolkit'
import shortTermReducer from '../Features/ShortTermGoal'
import longTermReducer from '../Features/LongTermGoal'
export const store = configureStore({
       reducer : {
              ShortTermGoal : shortTermReducer,
              LongTermGoal : longTermReducer,
       }
})