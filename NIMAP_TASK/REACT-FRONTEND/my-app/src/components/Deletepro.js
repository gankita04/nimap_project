import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import catApi from '../apiPath/catApi';


export default function Deletepro() {

    let {id} = useParams();
    let navigate = useNavigate()

    useEffect(()=>{
        fetch(catApi + 'delete-cat/' + id, {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(ans=>{
            console.log("res from delete product route");
            console.log(ans);
            if(ans['msg']){
                navigate('/show-product');
            }
        }) 
    },[]);

  return (
    <></>
  )
}
