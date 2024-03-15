import React,{useState,useContext,useEffect} from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
function View() {
   const [userdetails,setUserdetails]= useState()
   const {PostDetails} = useContext(PostContext)
   const {userId} = PostDetails
   const {Firebase} = useContext(FirebaseContext)
   useEffect(()=>{
     Firebase.firestore().collection('users').where('id','==',userId).get().then((resp)=>{
      resp.forEach(docs => {
        setUserdetails(docs.data())
      });
     
     })
    
   },[])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{PostDetails.price}  </p>
          <span>{PostDetails.name}</span>
          <p>{PostDetails.category}</p>
          <span></span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userdetails ? userdetails.username: null}</p>
          <p>{userdetails ? userdetails.phone: null}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
