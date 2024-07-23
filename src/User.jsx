import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { UserRequest } from './actions/userAction';

export default function User() {

    const d = useSelector(y=>y.user);

    const d1= useDispatch();

    useEffect(()=>{

        d1({type:'UserRequest'})
    },[])
  return (
    <div>User</div>
  )
}
