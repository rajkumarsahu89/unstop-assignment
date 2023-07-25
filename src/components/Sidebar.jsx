import { Box, Button, Center, Grid, Text } from "@chakra-ui/react";
import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      zIndex="10"
      top="0"
      bgColor="white"
      w={{ base: "15%", md: "15%", lg: "10%" }}
      h="100vh"
      display={{ base: "none", md: "block", lg: "block" }}
      m={"auto"}
    >
      <Grid gap="10px" p="10px 20px " fontSize={"13px"} fontWeight={"500"} m={"auto"}>
        <Box p="10px" m={"auto"}>
          <Center>
            <DashboardOutlinedIcon fontSize="small" m={"auto"} />
          </Center>
          <Text textAlign={"center"}>Dashboard</Text>
        </Box>
        <Box
          p="20px 10px"
          borderRadius={"10px"}
          bgColor="#E5F1FC"
          border="2px solid #4096EC"
          color={"#4096EC"}
          m={"auto"}
        >
          <Center>
            <NoteAltOutlinedIcon fontSize="small" />
          </Center>
          <Text>Assessment</Text>
        </Box>
        <Box p="10px" m={"auto"}>
          <Center>
            <LibraryBooksOutlinedIcon fontSize="small" />
          </Center>
          <Text>My Library</Text>
        </Box>
        <Box p="15px" borderTop={"1px dotted #E3E5E8"} mt="10px" m={"auto"}>
          <Button
            fontSize={"10px"}
            w="46px"
            h="18px"
            textAlign={"center"}
            alignItems={"center"}
            borderRadius={"7px"}
            border={"1px solid #DF623A"}
            display={"block"}
            fontWeight={"500"}
            color="#DF623A"
            p="0px 4px"
            bgColor={"#FBEBEA"}
            m={"auto"}
          >
            Admin
          </Button>
        </Box>
        <Box p="10px" m={"auto"}>
          <Center>
            <AnalyticsOutlinedIcon fontSize="small" />
          </Center>
          <Text textAlign={"center"}>Round Status</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Sidebar;