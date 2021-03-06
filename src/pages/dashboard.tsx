import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), { 
  ssr: false 
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18',
      '2021-03-19',
      '2021-03-20',
      '2021-03-21',
      '2021-03-22',
      '2021-03-23',
      '2021-03-24',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]}
];

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  setTimeout(() => {
    setShowChart(true);
  }, 1);

  return (
    <Flex direction="column" h="100vh">
      <Header/>

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        {showChart && (
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
              <Box
                padding={["6", "8"]}
                backgroundColor="gray.800"
                borderRadius={8}
                paddingBottom="4"
              >
                <Text fontSize="lg" marginBottom="4">
                  Inscritos da semana
                </Text>
                <Chart options={options} series={series} type="area" height={250}/>
              </Box> 
              <Box
                padding={["6", "8"]}
                backgroundColor="gray.800"
                borderRadius={8}
                paddingBottom="4"
              >
                <Text fontSize="lg" marginBottom="4">
                  Taxa de abertura
                </Text>
                <Chart options={options} series={series} type="area" height={250}/>
              </Box> 
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}