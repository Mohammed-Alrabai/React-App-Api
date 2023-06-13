import React from 'react'
import { useParams, useNavigate , Link } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  useColorMode,
  SimpleGrid,
  Button,
  Input,
  Img,
} from "@chakra-ui/react";
import Navbar from "../componant/Navbar";
import Footer from "../componant/Footer";
function DetailsCard() {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://6486f0b5beba6297278f86e8.mockapi.io/api/v1/Product/${params.id}`)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            }).catch(err => {
                console.error(err);
            })
    } , [])
  return (
    <>
    <Navbar />
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} h={"100vh"}>
        <Flex flexDirection="column" >
          <Flex
            mt={10}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}>
            <Box ml={3}>
              <chakra.h1 color={"blue.500"} pb={2} fontSize={"2xl"} fontWeight="bold">
                {data.Titil}
              </chakra.h1>
              <Img src={data.img} />
              <chakra.h2 pb={2} fontSize={"2xl"} fontWeight="bold">
                category : {data.pro}
              </chakra.h2>
              <chakra.p mt={1} fontSize={"sm"} color={"gray.500"}>
                Description : <br></br> {data.desc}
              </chakra.p>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}

export default DetailsCard