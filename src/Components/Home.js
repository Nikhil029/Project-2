import React,{useState, useEffect} from 'react'
import { Products } from './Products'
import {Navbar} from './Navbar'
import {auth,fs} from '../Config/Config'

export const Home = () => {

  function GetCurrentUser(){
    const [user, setUser]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('users').doc(user.uid).get().then(snapshot=>{
                    setUser(snapshot.data().FullName);
                })
            }
            else{
                setUser(null);
            }
        })
    },[])
    return user;
}

const user = GetCurrentUser();

  
  return (
    <>
        <Navbar user={user}/>
        <Products/>
    </>
  )
}
