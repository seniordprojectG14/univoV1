import React, { useState, useEffect } from 'react';
import classes from './NewPost.module.css';
import { TextField, Typography, Paper,Button, Grid  } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import InputBase from '@material-ui/core/InputBase';


import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';

import axios from 'axios';
import { dataURLtoFile } from "../../utils/dataURLtoFile";
import getCroppedImg, { generateDownload } from "../../utils/cropImage";

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyler = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));



const Post = ({ currentId, setCurrentId, user, setUser}) => {
    const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId) : null));


    const [postData, setPostData] = useState({address: '', photos: '', description: '', username: ''});
  
    const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);



   

    


   
    
      useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

   
    const clear = () => {
      setCurrentId(0);
      setPostData({address: '', photos: '', description: '', username: ''});
    };
  
 
    const fileSelected = event => {
      const file = event.target.files
      setImage(file)
    }

      
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      };


      
         const formdata = new FormData();
         
         for ( let i = 0; i < image.length; i++ ) {
          formdata.append( "imagecropped", image[ i ], image[ i ].name );
        }

        formdata.append("address", postData.address)
        formdata.append("description", postData.description)
        formdata.append("username", user?.username)
         await axios.post("/posts", formdata, { headers: {
					'accept': 'application/json',
					'Content-Type': 'multipart/form-data'
				}})
      if (currentId === 0) {
        
        clear();
      } else {
        
        clear();
      }
    };
    

    
      
     
  

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
  <div className={classes.control}>
    <label htmlFor='title'>address</label>
    <input type='text' id='address' value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value})}/>
  </div>
  <div className={classes.control}>
    <label >add photos</label>
    <div>
    <div className="container-buttons">

    <input multiple onChange={fileSelected} type="file" accept="image/*"></input>

          
              </div>
          </div>
  </div>
  <div className={classes.control}>
    <label htmlFor='description'>any other things to add</label>
    <textarea id='description'  rows='5' value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}></textarea>
  </div>
  <div className={classes.actions}>
    <button>Add post</button>
  </div>
</form>
    );
}
export default Post;