import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "@chakra-ui/react";import axios from "axios";
import cookie from "react-cookies";
import sweet from "sweetalert2";

function Login() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const api = "https://6486f0b5beba6297278f86e8.mockapi.io/api/v1/user";

  let issued = false;
  const handleSubmit = async () => {
    try {
      const response = await axios.get(api);
      setData(response.data);
      data.map((item) => {
        if (item.username === username && item.password === password) {
          localStorage.setItem("name", item.name);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("userId", item.id);
          return (issued = true);
        }
      });
    } catch (error) {
      console.error(error);
    }
    if (issued === true) {
      navigate("/");
    }
  }

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign up to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>User Name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}>
                  <Checkbox>Remember me</Checkbox>
                  <Text>
                    Create a new account{" "}
                    <Link color={"blue.400"} onClick={() => navigate("/signup")}>
                      Signup
                    </Link>
                  </Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      {/* <Box style={{ width: "100vw", height: "100vh" }}>
        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
          }}>
          <Text
            mb={5}
            fontSize={"2xl"}
            _after={{
              content: "''",
              display: "block",
              width: "full",
              height: "3px",
              bg: "gray.200",
              mt: "5px",
            }}>
            Login
          </Text>
          <Input
            mb={5}
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            mb={5}
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            mb={5}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button display={"block"} mb={5} onClick={handleSubmit}>
            Submit
          </Button>
          <chakra.p>
            create account{" "}
            <chakra.a
              color={"blue.500"}
              cursor={"pointer"}
              onClick={() => navigate("/signup")}>
              here
            </chakra.a>
          </chakra.p>
        </Box>
      </Box> */}
    </>
  );
}

export default Login;
