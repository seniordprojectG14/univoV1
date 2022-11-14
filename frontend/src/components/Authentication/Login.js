import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
//import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
//import { useHistory } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  //const history = useHistory();
  const navigate = useNavigate()

  const submitHandler = async () => {
    setLoading(true);
    if (!username || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // const { data } = await axios.post(
      //   "/api/user/login",
      //   { username, password },
      //   config
      // );

      // console.log(JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      //localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/blog");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    // <VStack spacing="10px">
    <>
    <form>
      {/* <FormControl id="username" isRequired> */}
        <FormLabel>username</FormLabel>
        <input
          value={username}
          // type="email"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}/> 
      </form>
      <form>
      <FormLabel>password</FormLabel>
      <input
          value={username}
          // type="email"
          placeholder="password"
          onChange={(e) => setUsername(e.target.value)}/> 
      
        
           
          
       
        </form>
      <button>submit</button>
      </>
    // </VStack>
  );
};

export default Login;
