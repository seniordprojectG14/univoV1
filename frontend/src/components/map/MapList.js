import React,{useRef,useState,useEffect} from 'react';
import classes from '../postComponents/PostList.module.css';
import MapChain from './MapChain';
import { useSelector } from 'react-redux';
import { Map, GoogleApiWrapper, Marker } from 'react-google-maps';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import PushPinIcon from '@mui/icons-material/PushPin';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const MapList = ({ setCurrentId, user }) => {

    
    const posts = useSelector((state) => state.posts);
    
    const AnyReactComponent = props => {
        
    return <PushPinIcon/>;
    }
    const defaultProps = {
        center: {
          lat: 41.80593409999999,
          lng: -72.25367539999999
        },
        zoom: 11
      };
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
                key: "AIzaSyBBoDTa2K0ql0d3ssnlMEYXdBvQLI6_LqA", 
                language: 'en'
             }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            
            <ul className={classes.list}>
  {posts?.map((post) => {
     return(
       <MapChain  post={post}  setCurrentId={setCurrentId} />
   );
  })}
</ul>
            
          </GoogleMapReact>
        </div>
      );
  }


export default MapList;