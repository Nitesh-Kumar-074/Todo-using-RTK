import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addTodoShort } from '../Features/ShortTermGoal'
import { addTodoLong } from '../Features/LongTermGoal'
function Input() {
       const dispatch = useDispatch()
       const [value,setValue] = useState("")
       function shortTermAddTodo(){
              if(value){
                     dispatch(addTodoShort(value))
                     setValue("")
              }
       }

       function longTermAddTodo(){
              if(value){
                     dispatch(addTodoLong(value))
                     setValue("")
              }
       }
  return (
    <>
    <input type='text' value={value} onChange={(e) => setValue(e.target.value)}
    className='text-3xl m-4 p-4 bg-gray-500'/>
    <button onClick={shortTermAddTodo} className='m-4 p-4 bg-black text-white text-xl'>Short Term Goal</button>
    <button onClick={longTermAddTodo} className='m-4 p-4 bg-black text-white text-xl'>Long Term Goal</button>
    </>
  )
}

export default Input