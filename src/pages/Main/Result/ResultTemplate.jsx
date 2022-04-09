import React from "react";
import {Button, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const ResultTemplate = ({todayResult, totalResult}) => {
    const navigate = useNavigate();

    const redirectToMain = () => {
        navigate("/");
    }

    return (
        <Stack direction={"column"} spacing={2.5}>
            <Stack
                direction={"row"}
                spacing={2.5}
                alignItems={"center"}
            >
                <Stack direction={"column"} spacing={2.5} alignItems={"center"}>
                    <Typography
                        variant={"h6"}
                        textAlign={"center"}
                    >
                        Today's <br/>
                        Failed Codes
                    </Typography>
                    <Stack direction={"column"} spacing={1.25}>
                    {
                        Object.keys(todayResult).map(code => (
                            <Stack
                                direction={"row"}
                                spacing={0.5}
                            >
                                <Typography>
                                    {code} :
                                </Typography>
                                <Typography>
                                    {todayResult[code]}
                                </Typography>
                            </Stack>
                        ))
                    }
                    </Stack>
                </Stack>
                <Stack direction={"column"} spacing={2.5} alignItems={"center"}>
                    <Typography
                        variant={"h6"}
                        textAlign={"center"}
                    >
                        Total <br/>
                        Failed Codes
                    </Typography>
                    <Stack direction={"column"} spacing={1.25}>
                        {
                            Object.keys(totalResult).map(code => (
                                <Stack
                                    direction={"row"}
                                    spacing={0.5}
                                >
                                    <Typography>
                                        {code} :
                                    </Typography>
                                    <Typography>
                                        {totalResult[code]}
                                    </Typography>
                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>
            
            <Button
                color={"primary"}
                onClick={redirectToMain}
                variant={"contained"}
            >
                그냥 연습 하러 가기
            </Button>
        </Stack>
    )
}