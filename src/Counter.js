import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function Counter() {

  const counter = useSelector(y=>y.counter);

  console.log(counter);


  const dis = useDispatch();
  
  return (
    <div>{counter}
    
      <button onClick={()=>{
        dis({type: "ABC_INC"})
      }}>+</button>
    </div>
  )
}
