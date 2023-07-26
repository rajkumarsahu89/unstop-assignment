import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const AssesmentOverview = () => {
    return (
        <Box
            bgColor="white"
            p="20px"
            display={{ base: "block", md: "block", lg: "block" }}
        >
            <Text fontSize={"18px"} fontWeight={"500"} textAlign={"left"}>
                Assessment Overview
            </Text>

            <Grid
                mt="15px"
                w="100%"
                borderRadius={"15px"}
                border="1px solid #E3E5E8"
                fontWeight={"500"}
                gridTemplateColumns={{
                    base: "repeat(1,auto)",
                    md: "repeat(2,auto)",
                    lg: "repeat(4,auto)",
                }}
            >
                <Box h="100%" p={{base:"8px 12px",md:"15px 20px",lg:"15px 20px"}}>
                    <Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
                        Total Assessment
                    </Text>
                    <Flex mt="20px" gap="10px" alignItems={"center"}>
                        <ViewAgendaOutlinedIcon
                            sx={{
                                color: "#8670F2",
                                backgroundColor: "#EBE8FD",
                                padding: "8px",
                                width: "35px",
                                height: "35px",
                                borderRadius: "6px",
                            }}
                        />
                        <Text fontSize={{base:"16px",md:"20px",lg:"20px"}} fontWeight={"bold"}>
                            34
                        </Text>
                    </Flex>
                </Box>

                <Box
                    borderRight={{ base: "none", md: "none", lg: "1px solid #E3E5E8" }}
                    borderLeft={{ base: "none", md: "1px solid #E3E5E8", lg: "1px solid #E3E5E8" }}
          borderTop={{ base: "1px solid #E3E5E8", md: "none", lg: "none" }}
          p={{base:"8px 12px",md:"15px 20px",lg:"15px 20px"}}
                >
                    <Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
                        Candidates
                    </Text>
                    <Flex mt="15px" gap="10px" alignItems={"center"}>
                        <PeopleAltOutlinedIcon
                            sx={{
                                color: "#8670F2",
                                backgroundColor: "#EBE8FD",
                                padding: "8px",
                                width: "35px",
                                height: "35px",
                                borderRadius: "6px",
                            }}
                        />
                        <Flex>
                            <Box
                                alignItems={"center"}
                                p={{base:"0px 5px ",md:"0px 10px",lg:"0px 10px"}}
                                borderRight={"1px solid #E3E5E8"}
                            >
                                <Text
                                    alignItems={"center"}
                                    fontSize={{base:"16px",md:"20px",lg:"20px"}}
                                    fontWeight={"bold"}
                                >
                                    11,145{" "}
                                    <span style={{ color: "#05C165", fontSize: "12px" }}>
                                        +89
                                    </span>{" "}
                                </Text>
                                <Text fontSize={"12px"}>Total Candidate</Text>
                            </Box>
                            <Box alignItems={"center"} p={{base:"0px 5px ",md:"0px 10px",lg:"0px 10px"}}>
                                <Text
                                    alignItems={"center"}
                                    fontSize={{base:"16px",md:"20px",lg:"20px"}}
                                    fontWeight={"bold"}
                                >
                                    114{" "}
                                    <span style={{ color: "#05C165", fontSize: "12px" }}>
                                        +89
                                    </span>{" "}
                                </Text>
                                <Text fontSize={"12px"}>Who Attempted</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box
                    borderRight={{ base: "none", md: "1px solid #E3E5E8", lg: "1px solid #E3E5E8" }}
                    borderTop={{
                        base: "1px solid #E3E5E8",
                        md: "1px solid #E3E5E8",
                        lg: "none",
                    }}
                    p={{base:"8px 12px",md:"15px 20px",lg:"15px 20px"}}
                    gridColumnStart={{ base: "1", md: "1", lg: "3" }}
                >
                    <Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
                        Candidates Source
                    </Text>
                    <Flex mt="15px" gap="10px" alignItems={"center"}>
                        <LanguageOutlinedIcon
                            sx={{
                                color: "#E9407A",
                                backgroundColor: "#FCE8EF",
                                padding: "8px",
                                width: "35px",
                                height: "35px",
                                borderRadius: "6px",
                            }}
                        />
                        <Flex>
                            <Box
                                alignItems={"center"}
                                p={{base:"0px 5px ",md:"0px 10px",lg:"0px 10px"}}
                                borderRight={"1px solid #E3E5E8"}
                            >
                                <Text
                                    alignItems={"center"}
                                    fontSize={{base:"16px",md:"20px",lg:"20px"}}
                                    fontWeight={"bold"}
                                >
                                    11,000{" "}
                                    <span style={{ color: "#05C165", fontSize: "12px" }}>
                                        +89
                                    </span>{" "}
                                </Text>
                                <Text fontSize={"12px"} textAlign={"left"}>
                                    Email
                                </Text>
                            </Box>
                            <Box
                                alignItems={"center"}
                                p={{base:"0px 5px ",md:"0px 10px",lg:"0px 10px"}}
                                borderRight={"1px solid #E3E5E8"}
                            >
                                <Text
                                    alignItems={"center"}
                                    fontSize={{base:"16px",md:"20px",lg:"20px"}}
                                    fontWeight={"bold"}
                                >
                                    145{" "}
                                    <span style={{ color: "#05C165", fontSize: "12px" }}>
                                        +89
                                    </span>{" "}
                                </Text>
                                <Text fontSize={"12px"}>Social Share</Text>
                            </Box>
                            <Box alignItems={"center"} p={{base:"0px 5px ",md:"0px 10px",lg:"0px 10px"}}>
                                <Text
                                    alignItems={"center"}
                                    fontSize={{base:"16px",md:"20px",lg:"20px"}}
                                    fontWeight={"bold"}
                                >
                                    145{" "}
                                    <span style={{ color: "#05C165", fontSize: "12px" }}>
                                        +89
                                    </span>{" "}
                                </Text>
                                <Text fontSize={"12px"}>Unique Link</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box
                    h="100%"
                    p={{base:"8px 12px",md:"15px 20px",lg:"15px 20px"}}
                    borderTop={{
                        base: "1px solid #E3E5E8",
                        md: "1px solid #E3E5E8",
                        lg: "none",
                    }}
                >
                    <Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
                        Total Purpose
                    </Text>
                    <Flex mt="20px" gap="10px" alignItems={"center"}>
                        <InsertLinkOutlinedIcon
                            sx={{
                                color: "#8670F2",
                                backgroundColor: "#EBE8FD",
                                padding: "8px",
                                width: "35px",
                                height: "35px",
                                borderRadius: "6px",
                            }}
                        />
                        <Text fontSize={{base:"16px",md:"20px",lg:"20px"}} fontWeight={"bold"}>
                            11
                        </Text>
                    </Flex>
                </Box>
            </Grid>
        </Box>
    );
};

export default AssesmentOverview;