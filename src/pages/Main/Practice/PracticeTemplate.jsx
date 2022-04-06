import React, {useEffect, useState} from "react";
import {Button, Stack, Typography} from "@mui/material";

export const PracticeTemplate = ({codes}) => {
    const [seconds, setSeconds] = useState(10);
    const [isTested, setIsTested] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [currIdx, setCurrIdx] = useState(0);

    useEffect(() => {
        if(!seconds) {
            setIsTested(true);
            return () => {}
        }

        setTimeout(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

    }, [seconds])

    const handleSubmit = () => {
        if(currIdx === codes.length - 1) {
            setIsFinished(true);
            return;
        }
        setCurrIdx(prev => prev + 1);
        setSeconds(10);
        setIsTested(false);
    }

    return (
        <Stack
            direction={"column"}
            alignItems={"center"}
            spacing={2.5}
        >
            <Typography
                variant={"h1"}
            >
                {codes[currIdx]}
            </Typography>
            <Typography
                variant={"h1"}
            >
                {seconds}
            </Typography>
            {
                isTested ? (
                    <Stack direction={"row"} spacing={2.5}>
                        <Button
                            variant={"contained"}
                            color={"success"}
                            onClick={handleSubmit}
                        >
                            성공
                        </Button>
                        <Button
                            variant={"contained"}
                            color={"error"}
                            onClick={handleSubmit}
                        >
                            실패
                        </Button>
                    </Stack>
                ) : null
            }
        </Stack>
    )
}