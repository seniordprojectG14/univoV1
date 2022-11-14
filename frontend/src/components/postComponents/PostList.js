import React,{useRef,useState,useEffect} from 'react';
import classes from './PostList.module.css';
import PostChain from './PostChain'
import { useSelector } from 'react-redux';




  const PostList = ({ setCurrentId, user, postdata }) => {

    console.log(JSON.stringify(postdata) +" here");
  return (

    <div className="main">
<ul className={classes.list}>
  {postdata?.map((post) => {
    console.log(JSON.stringify(post) +" here");
     return(
       <PostChain  post={post}  setCurrentId={setCurrentId} />
   );
  })}
</ul>
    </div>
  );
}

export default PostList;
