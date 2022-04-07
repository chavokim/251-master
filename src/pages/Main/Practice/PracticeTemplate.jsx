import React, {useEffect, useState} from "react";
import {Button, Stack, Typography} from "@mui/material";
import {PianoKeyboard} from "../../../common/templates/PianoKeyboard";
import {codesToString} from "../../../common/utils/codes";
import {useNavigate} from "react-router-dom";

export const PracticeTemplate = ({codes}) => {
    const [seconds, setSeconds] = useState(10);
    const [isTested, setIsTested] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [failedCodes, setFailedCodes] = useState([]);
    const [successCodes, setSuccessCodes] = useState([]);
    const [currIdx, setCurrIdx] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        if(!seconds) {
            setIsTested(true);
            return () => {}
        }

        setTimeout(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

    }, [seconds])

    const handleSubmit = (e) => {
        const {name} = e.target;

        if(name === "success") {
            setSuccessCodes(prev => ([
                ...prev,
                codes[currIdx],
            ]))
        } else {
            setFailedCodes(prev => ([
                ...prev,
                codes[currIdx],
            ]))
        }

        if(currIdx === codes.length - 1) {
            setIsFinished(true);
            return;
        }
        setCurrIdx(prev => prev + 1);
        setSeconds(10);
        setIsTested(false);
    }

    const redirectToMain = () => {
        navigate("/");
    }

    return (
        <Stack
            direction={"column"}
            alignItems={"center"}
            spacing={2.5}
        >
            {
                !isFinished ? (
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
                        <PianoKeyboard
                            selectedCodes={[codes[currIdx], ]}
                            sx={{
                                width: 400,
                                height: 200,
                            }}
                        />
                        <Typography
                            variant={"h1"}
                        >
                            {seconds}
                        </Typography>
                    </Stack>
                ) : (
                    <Stack
                        direction={"column"}
                        alignItems={"center"}
                        spacing={2.5}
                    >
                        <Stack
                            direction={"column"}
                            alignItems={"center"}
                        >
                            <Typography
                                variant={"h5"}
                            >
                                Success Codes
                            </Typography>
                            <Typography
                                variant={"h6"}
                            >
                                {codesToString(successCodes)}
                            </Typography>
                        </Stack>
                        <PianoKeyboard
                            selectedCodes={successCodes}
                            sx={{
                                width: 400,
                                height: 200,
                            }}
                        />
                        <Stack
                            direction={"column"}
                            alignItems={"center"}
                        >
                            <Typography
                                variant={"h5"}
                            >
                                Failed Codes
                            </Typography>
                            <Typography
                                variant={"h6"}
                            >
                                {codesToString(failedCodes)}
                            </Typography>
                        </Stack>
                        <PianoKeyboard
                            selectedCodes={failedCodes}
                            sx={{
                                width: 400,
                                height: 200,
                            }}
                        />
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={redirectToMain}
                        >
                            다시 돌아가기
                        </Button>
                    </Stack>
                )
            }
            {
                (isTested && !isFinished) ? (
                    <Stack direction={"row"} spacing={2.5}>
                        <Button
                            variant={"contained"}
                            color={"success"}
                            name={"success"}
                            onClick={handleSubmit}
                        >
                            성공
                        </Button>
                        <Button
                            variant={"contained"}
                            color={"error"}
                            name={"fail"}
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