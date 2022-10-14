import React,{useEffect, useState} from 'react';
import PostItem from './PostItem';




  const PostChain = ({college, firstAddress, address, pclist, setPcist, list, counter, lookingfor, maxval, minval, typeval, bedroomsval, post, setCurrentId, user, setUser,proplist }) => {


 








 
  
  


        return(
            <PostItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>  
        )

  
}

export default PostChain;