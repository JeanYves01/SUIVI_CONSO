import React from 'react';
import ReactApexChart from "react-apexcharts";
import { Box, Flex } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function MyLineChart (props) {
  const data = [
    { name: 'Sem 1', Conso: 20 },
    { name: 'Sem 2', Conso: 40 },
    { name: 'Sem 3', Conso: 20 },
    { name: 'Sem 4', Conso: 23 },
    { name: 'Sem 5', Conso: 18 },
    { name: 'Sem 6', Conso: 21 },
    { name: 'Sem 7', Conso: 12 },
    { name: 'Sem 8', Conso: 43 },
  ];
   
  return (
    <Flex justify="center" align="center" height="300px">
      <Box width="95%" height="100%" transform='translate(5%,0%)'> 
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              
              dataKey="Conso"
              stroke="#008F75"
              fill="#008F75"
              fillOpacity={1}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
}