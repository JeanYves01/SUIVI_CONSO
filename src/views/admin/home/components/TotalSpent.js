// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components

import LineChart from "components/charts/LineChart";

import React from "react";

// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import DatePicke from "views/admin/rapport/components/DatePicker";

export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("black", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (

    <Box w={{ base: '100%', md: '204%', lg: '203%' }}
      h={{ base: '80%', md: '80vh', lg: '51vh' }} borderRadius='10px' boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)" transform='translate(0%,8%)'>
      <Flex w='100%' flexDirection={{ base: 'column', md: 'row' }} align='center' gap='200px' transform='translate(0%,1%)'>
        <Text
          color={textColor}
          fontSize={{ base: 'xl', md: 'xl', lg: "xl" }}
          textAlign={{ base: 'center', md: 'start' }}
          fontWeight='500'
          mb={{ base: '10px', md: '0' }}
          ml={{ base: '0px', md: '8px', lg: '15px' }}
        >
          Consommation depuis le dernier mois
        </Text>
        <Box transform={{ base: 'translate(4%,-700%)', md:  'translate(-10%,0%)', lg: 'translate(90%,-5%)' }}    >
          <DatePicke />
        </Box>
      </Flex>

      <Flex className="flex " w='100%' flexDirection={{ base: 'column', lg: 'row' }} align='center' height='20%' transform={{ base: 'translate(-4%,-170%)', lg: 'translate(0%,155%)' }}    >
        <Box height={{ base: '260px', lg: '100%' }}    w={{ base: '100%', lg: '90%' }}  transform={{ base: 'translate(0%,0%)', md:  'translate(0%,100%)', lg: 'translate(0%,-110%)' }}>


          <LineChart />
        </Box>
      </Flex>
    </Box>



  );
}
{/* <Card
  justifyContent='center'

  
  mt='25px'
  {...rest}
>
</Card> */}