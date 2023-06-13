import React from 'react'
import { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from 'axios'
import cookie from "react-cookies";

function Signup() {
  const [name , setName] = useState('')
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState("")
  const [data , setData] = useState([])
  const navigate = useNavigate()
  const api = "https://6486f0b5beba6297278f86e8.mockapi.io/api/v1/user";


  const handleSubmit = () => {
    if (name === "" || username === "" || password === "") {
      alert("Please fill all the fields")
    } else {
      axios
        .post(api, {
          name: name,
          username: username,
          password: password,
        })
        .then((res) => {
          localStorage.setItem("name", name);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("userId", res.data.id);
          navigate("/")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>



    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" 
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="username">
              <FormLabel>User Name</FormLabel>
              <Input type="text" 
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" 
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text>You Have Account <Link color={'blue.400'} onClick={() => navigate("/login")}>Log in</Link></Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>


    {/* <Box p={5} >
    
    <Input mb={5} placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
    <Input mb={5} placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
    <Input mb={5} placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
    <Button display={"block"} mb={5} onClick={handleSubmit}>Submit</Button>

    </Box> */}
    
    </>
  )
}

export default Signup