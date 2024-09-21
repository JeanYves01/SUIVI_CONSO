import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  SimpleGrid,
  Button,
  Grid,
} from '@chakra-ui/react';
import DatePicke from './DatePicker';
import DownloadButton from './DownloadButton';
import Card from "components/card/Card.js";

export default function DevelopmentTable(props) {
  return (
    <Card mt={{ base: "50px", md: "80px", xl: "76px", }} height={{ base: '120vh', md: '75vh', lg: '75vh' }} bg='white' transform='translate(0%, 7%)'>
      <Box width={{ base: '100%', md: '90%', lg: '100%' }} mx='auto' transform={{base:'translate(0%, -10%)', md:'translate(0%, -23%)', lg:'translate(0%, -23%)'}} height='50vh'>
        <Grid
          bg='white'
          mt='78px'
          width='100%'
          height={{ base: 'auto', md: '24vh' }}
          pb='20px'
          boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
          borderRadius='5px'
          p={{ base: '10px', md: '20px' }}
        >
          <Box
            width='100%'
            mb='10px'
            display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems='center'
          >
            <Text fontWeight='bold' mb={{ base: '10px', md: '0' }} mr='auto' transform={{ base: 'translate(60%,0%)' }}>
              Rapport disponible
            </Text>
            <Box display='flex' alignItems='center' gap={{ base: '20px', md: '80px', lg: '80px' }} flexDirection={{ base: 'column', md: 'row' }} >
              <DatePicke />
              <DownloadButton />
            </Box>
          </Box>
          <hr />
          <SimpleGrid
            columns={{ base: 1, md: 4, lg: 4, "2xl": 6 }}
            width={{ base: 'auto', md: '100%', lg: '100%' }}
            gap='15px'
            mb='0px'
            mt='15px'
            justifyContent='center'
          >
            {['Avril', 'Mai', ' Juin', 'Juillet'].map((rapport, index) => (
              <Box
                key={index}
                bg='white'
                height='12vh'
                width='100%'
                borderRadius='10px'
                border='1px solid navy'
                boxShadow={`inset 6px 0 ${index < 3 ? 'rgb(155, 219, 20)' : 'rgb(67, 248, 237)'}`}
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                textAlign='center'
                p='10px'
              >
                <Text>{rapport}</Text>
                <Button
                  width='90px'
                  height='27px'
                  bg={index < 3 ? '#9bdb14' : '#43f8ed'}
                  color='white'
                  fontWeight='bold'
                  borderRadius='5px'
                  mt='10px'
                >
                  {index < 3 ? 'Terminer' : 'En cours'}
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Grid>
        <TableContainer
          id='table-to-download'
          justifyContent='center'
          width='100%'
          height={{ base: 'auto', md: '45vh' }}
          mt='19px'
          bg='white'
          borderRadius='5px'
          boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
          p={{ base: '10px', md: '20px' }}
        >
          <Table variant='simple' colorScheme='teal'>
            <Thead bg='orange.500'>
              <Tr>
                <Th>Période</Th>
                <Th>Durée (jour)</Th>
                <Th isNumeric>Conso (kWh)</Th>
                <Th isNumeric>Moy (kWh/j)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(5)].map((_, index) => (
                <Tr key={index}>
                  <Td>02/04-04/04 2024</Td>
                  <Td>02</Td>
                  <Td transform='translate(50%,0%)'>15</Td>
                  <Td isNumeric>5.4</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Total</Th>
                <Th>23</Th>
                <Th>73</Th>
                <Th isNumeric>35.5</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
}











































































































  



































// /* eslint-disable */
// import {
//   Flex,
//   Progress,
//   Table,
//   Tbody,
//   Td,
//   Text,
//   Th,
//   Thead,
//   Tr,
//   useColorModeValue,
// } from "@chakra-ui/react";
// // Custom components
// import Card from "components/card/Card";
// import { AndroidLogo, AppleLogo, WindowsLogo } from "components/icons/Icons";
// import Menu from "components/menu/MainMenu";
// import React, { useMemo } from "react";
// import {
//   useGlobalFilter,
//   usePagination,
//   useSortBy,
//   useTable,
// } from "react-table";

// export default function DevelopmentTable(props) {
//   const { columnsData, tableData } = props;

//   const columns = useMemo(() => columnsData, [columnsData]);
//   const data = useMemo(() => tableData, [tableData]);

//   const tableInstance = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     initialState,
//   } = tableInstance;
//   initialState.pageSize = 11;

//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   const iconColor = useColorModeValue("secondaryGray.500", "white");
//   const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
//   return (
//     <Card
//     justifyContent='center'
//     w='800px'
//     h='61vh'
//     margin= '0px'
//       overflowX={{ sm: "scroll", lg: "hidden" }}>
//       <Flex px='25px' justify='space-between' mb='20px' align='center'>
//         <Text
//           color={textColor}
//           fontSize='22px'
//           fontWeight='700'
//           lineHeight='100%'>
//           Development Table
//         </Text>
//         <Menu />
//       </Flex>
//       <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
//         <Thead>
//           {headerGroups.map((headerGroup, index) => (
//             <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
//               {headerGroup.headers.map((column, index) => (
//                 <Th
//                   {...column.getHeaderProps(column.getSortByToggleProps())}
//                   pe='10px'
//                   key={index}
//                   borderColor={borderColor}>
//                   <Flex
//                     justify='space-between'
//                     align='center'
//                     fontSize={{ sm: "10px", lg: "12px" }}
//                     color='gray.400'>
//                     {column.render("Header")}
//                   </Flex>
//                 </Th>
//               ))}
//             </Tr>
//           ))}
//         </Thead>
//         <Tbody {...getTableBodyProps()}>
//           {page.map((row, index) => {
//             prepareRow(row);
//             return (
//               <Tr {...row.getRowProps()} key={index}>
//                 {row.cells.map((cell, index) => {
//                   let data = "";
//                   if (cell.column.Header === "NAME") {
//                     data = (
//                       <Text color={textColor} fontSize='sm' fontWeight='700'>
//                         {cell.value}
//                       </Text>
//                     );
//                   } else if (cell.column.Header === "TECH") {
//                     data = (
//                       <Flex align='center'>
//                         {cell.value.map((item, key) => {
//                           if (item === "apple") {
//                             return (
//                               <AppleLogo
//                                 key={key}
//                                 color={iconColor}
//                                 me='16px'
//                                 h='18px'
//                                 w='15px'
//                               />
//                             );
//                           } else if (item === "android") {
//                             return (
//                               <AndroidLogo
//                                 key={key}
//                                 color={iconColor}
//                                 me='16px'
//                                 h='18px'
//                                 w='16px'
//                               />
//                             );
//                           } else if (item === "windows") {
//                             return (
//                               <WindowsLogo
//                                 key={key}
//                                 color={iconColor}
//                                 h='18px'
//                                 w='19px'
//                               />
//                             );
//                           }
//                         })}
//                       </Flex>
//                     );
//                   } else if (cell.column.Header === "DATE") {
//                     data = (
//                       <Text color={textColor} fontSize='sm' fontWeight='700'>
//                         {cell.value}
//                       </Text>
//                     );
//                   } else if (cell.column.Header === "PROGRESS") {
//                     data = (
//                       <Flex align='center'>
//                         <Text
//                           me='10px'
//                           color={textColor}
//                           fontSize='sm'
//                           fontWeight='700'>
//                           {cell.value}%
//                         </Text>
//                         <Progress
//                           variant='table'
//                           colorScheme='brandScheme'
//                           h='8px'
//                           w='63px'
//                           value={cell.value}
//                         />
//                       </Flex>
//                     );
//                   }
//                   return (
//                     <Td
//                       {...cell.getCellProps()}
//                       key={index}
//                       fontSize={{ sm: "14px" }}
//                       minW={{ sm: "150px", md: "200px", lg: "auto" }}
//                       borderColor='transparent'>
//                       {data}
//                     </Td>
//                   );
//                 })}
//               </Tr>
//             );
//           })}
//         </Tbody>
//       </Table>
//     </Card>
//   );
// 