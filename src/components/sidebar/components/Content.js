// chakra imports
import { Box, Flex, HStack, Icon, Link, Stack } from "@chakra-ui/react";


//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import  "./Content.css";
import { NavLink } from "react-router-dom";
import MainDashboard from "views/admin/home";
import Conso from "views/admin/conso";
import Contact from "views/admin/contact";
import Rapport from "views/admin/rapport";
import SignInCentered from "views/inscr/signIn";
// inscr Imports
import SignUpCentered from "views/inscr/signUp";
import React from "react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlineLogout,
  MdReport,
} from "react-icons/md";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' px="16px" borderRadius='30px'>
      {/* <Brand /> */}
      <Stack 
      direction='column' mb='auto' mt='18px' gap='7' paddingLeft='30px'>
        <HStack color='white'    className="sidebar-link">
          <Icon as={MdHome} width='20px' height='20px' color='inherit' />
          <NavLink to="/admin/home" >
          Accueil
        </NavLink>
        </HStack>
        <HStack color='white'    className="sidebar-link">
          <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />
          <NavLink to="/admin/conso" >
          Suivi Conso
        </NavLink>
        </HStack>
        <HStack color='white'    className="sidebar-link">
          <Icon as={MdReport} width='20px' height='20px' color='inherit' />
          <NavLink to="/admin/rapport" >
          Rapports
        </NavLink>
        </HStack>
        <HStack color='white'    className="sidebar-link">
          <Icon as={MdPerson} width='20px' height='20px' color='inherit' />
          <NavLink to="/admin/contact">
          Contact
        </NavLink>
        </HStack>
        <HStack transform='translate(0%,800%)' color='white'  >
          <Icon as={MdOutlineLogout} width='20px' height='20px' color='inherit' />
          <NavLink to="/inscr/signIn">
          Déconnexion
        </NavLink>
        </HStack>
      </Stack>


      {/* { <Box
        mt='60px'
        mb='40px'
        borderRadius='30px'>
        <SidebarCard />
      </Box> } */}
    </Flex>
  );
}

export default SidebarContent;
