
import {

  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,

  Avatar,
  Button,


  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  Spinner,
  Input,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import Seuil from "components/card/Seuil";
import Remaning from "components/card/Remaning";
import IconBox from "components/icons/IconBox";
import React, { useState } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdDateRange,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/home/components/CheckTable";
import ComplexTable from "views/admin/home/components/ComplexTable";
import DailyTraffic from "views/admin/home/components/DailyTraffic";
import PieCard from "views/admin/home/components/PieCard";
import Tasks from "views/admin/home/components/Tasks";
import TotalSpent from "views/admin/home/components/TotalSpent";
import WeeklyRevenue from "views/admin/home/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/home/variables/columnsData";
import tableDataCheck from "views/admin/home/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/home/variables/tableDataComplex.json";
import Card from "components/card/Card.js";
import DatePicker from "views/admin/rapport/components/DatePicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("black", "white");
  const orangeColor = "#FFD18B";
  const blueColor = "#BBF5FF";
  const btnColor = "orange";
  const boxBg = useColorModeValue("orange.50", "");
  const bgSeuil = useColorModeValue("orange.50", "whiteAlpha.100");
  let menuBg = useColorModeValue('white', 'navy.800');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  );
  const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConfirmClick = () => {
    setIsLoading(true);
    // Simulate an async operation (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
      setIsMenuOpen(false); // Close the menu
    }, 2000); // Adjust the timeout to your needs
  };
  return (
    <Card mt={{ base: "80px", md: "80px", xl: "76px", }}  height={{ base: "110vh", md: "155vh", xl: "75vh", }} bg='white' transform='translate(0%, 7%)' pt={{ base: "60px", md: "100px", lg: "20px"}}>
      <Box pt={{ base: "120px", md: "80px", xl: "80px" }} marginLeft='40px' marginRight='40px' transform='translate(0%,-14%)' height='auto'>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3, "2xl": 6 }}
          gap='20px'


        >
          <Menu w="100%" isOpen={isMenuOpen} onOpen={() => setIsMenuOpen(true)} onClose={() => setIsMenuOpen(false)}>
            <MenuButton width='100%' height='15vh' borderRadius='10px' bg='#FFC163'
              cursor='pointer'
              boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"

              _hover={{
                bg: '#EF7D00',  // Changez la couleur de survol ici
                opacity: '1',    // Changez l'opacité au survol
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease-in-out' // Ajout de la transition
              }}>
              <Seuil/>
            </MenuButton>
            <MenuList boxShadow='4px 0px 10px rgba(0,0,0,0.2)' p="0px" mt="10px" borderRadius="15px" bg={menuBg} border="none" height='25vh'>
              <Flex w="100%" mb="0px" gap='5px' borderBottom="1px solid" borderColor={borderColor}>
                <Text
                  ps="10px"
                  pt="5px"
                  pb="15px"
                  w="80%"

                  borderColor={borderColor}
                  fontSize="sm"
                  fontWeight="700"
                  color={textColor}>
                  Choisir la période
                </Text>
                <DatePicker />
              </Flex>
              <Flex flexDirection="row" p="25px">
                <FormLabel
                  display='flex'
                  ms='4px'
                  fontSize='sm'
                  fontWeight='500'
                  color={textColor}
                  mt='5px'
                >
                  Définir le seuil en (kWh)
                </FormLabel>
                <Input
                  isRequired
                  variant='auth'
                  fontSize='sm'
                  type='text'
                  placeholder='86'

                  fontWeight='500'
                  width={{ base: "70px", md: "70px", xl: "70px" }}
                  height={{ base: "30px", md: "30px", xl: "30px" }}
                  borderRadius='8px'

                />
              </Flex>
              <Button bg={btnColor} color='white' borderRadius='10px' fontSize='xl-s' transform='translate(80%,-20%)' onClick={handleConfirmClick}
              >
                {isLoading  ?  <Spinner size='sm' /> : 'Confirmer' }</Button>
            </MenuList>
          </Menu>

          <MiniStatistics
            startContent={
              <Icon mt='75px' w='20px' h='30px' as={MdBarChart} color={brandColor} />
            }

            name='Energie consommée'
            value='76 kWh'

          />
          <Remaning
            startContent={
              <Icon mt='75px' w='20px' h='30px' as={MdAttachMoney} color={brandColor} />
            }
            pt='0px'
            name='Marge de consommation restante'
            value='14 kWh'
          />
        </SimpleGrid>



        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px' height='40%'>
          <TotalSpent />
        </SimpleGrid>
      </Box>
    </Card>

  );
}
