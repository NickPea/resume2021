/**
 * APP START UP - redux and saga test
 */

 
 import React from 'react'
 import {useDispatch} from 'react-redux'


 const StartApp = () => {
     const dispatch = useDispatch();
    
     return (
         <div>
             <button onClick={() => dispatch({type: 'APP/START'})}>Start App</button>
         </div>
     )
 }
 
 export default StartApp
 