
import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import {
  
  MdArrowDownward,
  
  MdBarChart,
  MdElectricBolt,
  
  MdTrendingUp,
  
} from "react-icons/md";
// Custom components
import AeraChart from "views/admin/conso/components/AeraChart";
import BarChart from "views/admin/conso/components/BarChart";
import Alerte from "views/admin/conso/components/Alerte";
import PieChart from "views/admin/conso/components/PieChart";
import CircularProgressBar from "views/admin/conso/components/CircularProgressBar";

import Card from "components/card/Card.js";


export default function Conso() {
  return (
    <Card mt={{ base: "40px", md: "80px", xl: "76px", }} height={{ base: "155vh", md: "75vh", xl: "75vh", }} bg='white' transform='translate(0%, 7%)'>
      {/* Main Fields */}
      <Flex
        width='100%'
        display='flex'
        flexDirection={{ base: "column", md: "row", xl: "row", }}
        gap='10px'
        position='absolute'

      >
        <Flex
          flexDirection='column'
          width={{ base: "95%", md: "50%", lg: "50%", }} gap="7px">
          
          <AeraChart />
         
          

          <Box bg='white' marginTop='20px' width='95%' height='36vh' borderRadius='10px'>
            <Alerte />
          </Box>

        </Flex>
        <Flex
          flexDirection='column'
          width={{ base: "90%", md: "50%", lg: "45%", }} gap={{base:'20px', md: '20px', lg:'7px'}}>
          <Flex flexDirection='column' gap={{base:'20px', md: '20px', lg:'7px'}}>
            <Flex flexDirection='row' gap='10px' >
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
                <Flex flexDirection='column' gap={{base:'20px', md: '20px', lg:'35px'}}>
                  <Flex justifyContent='center' >
                    <Text color='red' fontSize='2xl' transform={{ base: 'translate(-20%,20%)', md: 'translate(-35%,20%)', lg: 'translate(-55%,20%)', }} >+15kWh</Text>
                    <Flex transform={{ base: 'translate(10%,70%)', md: 'translate(73%,62%)', lg: 'translate(75%,70%)', }} width={{ base: "30%", md: "23%", lg: "20%", }} height='3vh' bg='red' borderRadius='5px'>
                      <Text fontSize='sm' color='#FFFFFF'>+12%</Text>
                      <Icon w='20px' h='35px' as={MdTrendingUp} color='#FFFFFF' transform='translate(2%,-18%)' />
                    </Flex>

                  </Flex>
                  <Flex flexDirection='row' gap='10px'  transform={{ base: 'translate(0%,-15%)', md: 'translate(8%,-15%)', lg: 'translate(7%,-15%)', }} >
                    <Icon mt='5px' w='20px' h='20px' as={MdBarChart} color='red' />
                    <Text fontSize={{ base: 'xl', md: 'xl', lg: 'xl', }}  color='red' transform={{ base: 'translate(-4%,0%)', md: 'translate(0%,0%)', lg: 'translate(0%,0%)', }} >Consommation</Text>

                  </Flex>
                </Flex>
              </Box>
              <Box bg='#008F75'
                width='100%'
                height='15vh'
                borderRadius='10px'
                cursor='pointer'
                boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
                opacity='0.7'
                _hover={{
                  bg: '#008F75',  // Changez la couleur de survol ici
                  opacity: '1',    // Changez l'opacité au survol
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease-in-out' // Ajout de la transition
                }}>
                <Flex flexDirection='column' gap='35px'>
                  <Flex justifyContent='center' transform={{ base: 'translate(-18%,20%)', md: 'translate(-31%,20%)', lg: 'translate(-31%,20%)', }}>
                    {/* <Icon w='20px' h='35px' as={MdArrowDownward} color='white' /> */}
                    <Text color='white' fontSize='2xl'>218 V</Text>
                  </Flex>
                  <Flex flexDirection='row' gap='20px' transform='translate(8%,-15%)' >
                    <Icon mt='5px' w='20px' h='20px' as={MdElectricBolt} color='white' />
                    <Text fontSize='xl'  color='white'>Tension</Text>

                  </Flex>
                </Flex>
              </Box>
            </Flex>

            <Flex flexDirection='row' gap='10px'>
              <CircularProgressBar />
              <PieChart />
            </Flex>

          </Flex>
          <BarChart />
        </Flex>

      </Flex>
    </Card>
  );
}
