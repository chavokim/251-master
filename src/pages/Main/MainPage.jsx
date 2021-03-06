import React from "react";
import {Box, Stack} from "@mui/material";
import {MainContainer} from "./MainContainer";
import {Route, Routes} from "react-router-dom";
import {PracticeContainer} from "./Practice/PracticeContainer";
import {ResultContainer} from "./Result/ResultContainer";

export const MainPage = () => {
    return (
        <Box
            height={"100vh"}
            width={"100vw"}
        >
            <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
            >
                <Routes>
                    <Route path={"/"} element={<MainContainer />} />
                    <Route path={"/practice"} element={<PracticeContainer />} />
                    <Route path={"/result"} element={<ResultContainer />} />
                </Routes>
            </Stack>
        </Box>
    )
}