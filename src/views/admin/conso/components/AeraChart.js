import React from 'react';
import ReactApexChart from "react-apexcharts";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  LineChart,
  AreaChart,
  Area,
  Line,

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function MyLineChart(props) {
  const data = [
    {
      name: '07:00',
     
      Conso: 2,
      
    },
    {
      name: '07:10',
     
      Conso: 3,
      
    },
    {
      name: '07:20',
     
      Conso: 1,
      
    },
    {
      name: '07:30',
     
      Conso: 3,
      
    },
    {
      name: '07:40',
     
      Conso: 2,
      
    },
    {
      name: '07:50',
     
      Conso: 4,
      
    },
    {
      name: '07:60',
     
      Conso: 1,
      
    },
  ];

  return (
    <Box width='95%' height="32vh" bg='white' boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)" borderRadius='10px'>
      <Flex justify="center" align="center"  >
        <Box w="95%" marginTop={{ base: "5px", md: "10px", lg: "10px", }}>
          <Text fontSize="xl" marginBottom='2px' transform='translate(6%,-3%)'>Consommation actuelle</Text>

          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="20%" stopColor="#008F75" />
                  <stop offset="80%" stopColor="#008F75" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              
              <XAxis dataKey="name" fontSize='12px' />
              <YAxis fontSize='12px' />
              <Tooltip />
              <Area type="monotone" dataKey="Conso" stroke="#008F75" fill="url(#fillGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

      </Flex>
    </Box>

  );
}