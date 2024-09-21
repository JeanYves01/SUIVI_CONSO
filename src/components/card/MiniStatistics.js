// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
  Box,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";

// Custom icons
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdBolt,
  MdDateRange,
  MdFileCopy,
} from "react-icons/md";
export default function Default(props) {
  const { startContent, endContent, name, growth, value, style } = props;
  const textColor = useColorModeValue("black", "white");
  const textColorSecondary = "black";

  return (
    <Box bg='#FFFFFF'
    width='100%'
    height='15vh'
    borderRadius='10px'
    cursor='pointer'
    boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
    opacity='1'
    _hover={{
      bg: '#FFFFFF',  // Changez la couleur de survol ici
      opacity: '1',    // Changez l'opacité au survol
      transform: 'scale(1.05)',
      transition: 'all 0.3s ease-in-out' // Ajout de la transition
    }}>
      <Box
    >
      <Text color='#FFC163' fontSize='xl' transform='translate(7%,50%)'>Energie consommée</Text>
      <Flex gap='5px' transform='translate(7%,60%)' color='#FFC163'>
        <Icon  w='20px' h='35px' as={MdBolt} />
        <Text fontSize='xl' transform='translate(5%,7%)'>40 kWh</Text>
      </Flex>


    </Box>
  </Box>
  );
}
