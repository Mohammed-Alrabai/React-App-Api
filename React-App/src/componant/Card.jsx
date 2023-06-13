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
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card() {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://6486f0b5beba6297278f86e8.mockapi.io/api/v1/Product")
      .then((res) => {
        setOriginalData(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    const filterData = originalData.filter((item) => {
      return item.Titil.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setData(filterData);
  };

  return (
    <>
      <Box
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        display={"flex"}>
        <Input
          placeholder="Search"
          size="md"
          mt={10}
          value={search}
          onChange={handleSearch}
        />
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3}} spacing={10} p={10}>
        {data.map((item) => (
          <Box
            key={item.id}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative">
            <Image src={item.img} roundedTop="lg" />
            <Box p="6">
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated>
                  {item.Titil}
                </Box>
              </Flex>
                <Button mt={10} size="sm" bg={"blue.400"} onClick={() => navigate(`/Card/${item.id}`)}>
                  Details
                </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Card;
