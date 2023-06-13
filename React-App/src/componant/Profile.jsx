import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  filter,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate , useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import Navbar from "../componant/Navbar";
import Footer from "../componant/Footer";
import axios from "axios";

export default function UserProfileEdit() {
    const [user, setUser] = useState("");
    const [name , setName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [data , setData] = useState([]);
    const navigate = useNavigate();
    const userId = useParams();
    const api = "https://6486f0b5beba6297278f86e8.mockapi.io/api/v1/user/" + userId.id;

    useEffect(() => {
      axios
        .get(api)
        .then((res) => {
          setUser(res.data);
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } , []);

    // Update User Profile
    const handleSubmit = () => {
      axios
        .put(api, {
          name: name,
          username: username,
          password: password,
        })
        .then((res) => {
          setData(res.data);
            localStorage.setItem("name", name);
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("userId", res.data.id);
            console.log(res);
        })
        .catch((err) => console.log(err));
    }

    const deleteUser = async () => {
      axios
        .delete(api)
        .then((res) => {
          
          localStorage.removeItem("name");
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          localStorage.removeItem("userId");
          navigate("/signup");
        })
        .catch((err) => console.log(err));
        
    }
  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://bit.ly/broken-link"></Avatar>
              </Center>
              <Center w="full">
                <Button w="full" _disabled={true}>
                  Change Icon
                </Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>User Name</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
              onClick={deleteUser}
              >
              Delete
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleSubmit}
              >
              Update
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
