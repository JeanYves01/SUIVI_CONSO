
import React from "react";

import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import { Box, SimpleGrid, useColorModeValue, Icon } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/rapport/components/DevelopmentTable";



export default function Settings() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("black", "white");
  return (

    <DevelopmentTable

    />
  );
}
   

