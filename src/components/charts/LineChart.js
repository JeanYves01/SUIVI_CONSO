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

const generateData = () => {
  const weeks = 12; // Nombre de semaines
  let data = [];
  for (let i = 1; i <= weeks; i++) {
    data.push({
      name: `Sem ${i}`,
      Conso: Math.floor(Math.random() * 50) + 10, // Génère une consommation entre 10 et 60
    });
  }
  return data;
};

export default function MyLineChart (props) {
  const data = generateData()
   
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