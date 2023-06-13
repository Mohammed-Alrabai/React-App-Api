import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { CiLight } from "react-icons/ci";
import { BsMoon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState , useEffect } from "react";

export default function Nav() {
  const [data , setData] = useState([]);


  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userName = localStorage.getItem("name", name);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const isLogin = () => {
    if (localStorage.getItem("username")) {
      return true;
    } else {
      return  false;
    }
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <CiLight /> : <BsMoon />}
              </Button>
              {isLogin() ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}>
                    <Avatar size={"sm"} src="https://bit.ly/broken-link" />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar size={"xl"} src="https://bit.ly/broken-link" />
                    </Center>
                    <br />
                    <Center>
                      <p>{userName}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>
                      <Link onClick={() => navigate(`/Profile/${userId}`)}>Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <>
                  <Button onClick={() => navigate("/login")}>Login</Button>
                  <Button onClick={() => navigate("/signup")}>Sign Up</Button>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
