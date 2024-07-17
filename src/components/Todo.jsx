import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodoLong } from '../Features/LongTermGoal'
import { removeTodoShort } from '../Features/ShortTermGoal'
function Todo() {
       const shortTermTodos = useSelector(state => state.ShortTermGoal.shortTodos)
       const longTermTodos = useSelector(state => state.LongTermGoal.longTodos)
       const dispatch = useDispatch()
       function deleteLongTermTodo(){
              dispatch(removeTodoLong())
       }
  return (
    <>
    <h3 className='text-white text-3xl '>These are short term goals </h3>
    {/**Short term goals */}
    {
       shortTermTodos.map((item) => (
              <div key={item.id}>
                     <div className='bg-blue-400 text-2xl m-4 p-4 inline-block'>{item.content}

                     
                     </div>
                     <button onClick={() => dispatch(removeTodoShort(item.id))} className='bg-black text-md m-4 p-3 text-white'>Delete</button>
              </div>
       ))
    }
    <h3 className='text-white text-3xl '>These are long term goals </h3>
    {/**Long term goals */}{
       longTermTodos.map((item) => (
              <div key={item.id}>
                     <div className='bg-pink-400 text-2xl m-4 p-4 inline-block'>{item.content}
                            
                     </div>
                     <button onClick={() => dispatch(removeTodoLong(item.id))} className='bg-black text-md m-4 p-3 text-white'>Delete</button>
              </div>
       ))
    }
    </>
  )
}

export default Todo