import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/Navbar";
import Assesments from "./components/Assesment";
import AssesmentOverview from "./components/AssesmentOverview";
import MobileNavbar from "./components/MobileNavbar";
import Sidebar from "./components/Sidebar";

const Home = () => {
    return (
        <Flex justifyContent={"space-between"} pr="20px" h="200vh">
            <Sidebar />

            <Box
                w={{ base: "100%", md: "83%", lg: "88%" }}
                position="absolute"
                left={{ base: "0", md: "16%", lg: "11%" }}
            >
                <MobileNavbar />
                <Navbar />
                <AssesmentOverview />
                <Assesments />
            </Box>
        </Flex>
    );
};

export default Home;