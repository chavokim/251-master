import React, {useEffect, useState} from "react";
import {Button, Stack, Typography} from "@mui/material";
import {PianoKeyboard} from "../../../common/templates/PianoKeyboard";
import {CODES, codesToString} from "../../../common/utils/codes";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import {getItem, getTodayKey, getTotalKey, setItem} from "../../../common/utils/localStorage";

export const PracticeTemplate = ({codes, practiceTime}) => {
    const [seconds, setSeconds] = useState(practiceTime);
    const [isTested, setIsTested] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [failedCodes, setFailedCodes] = useState([]);
    const [successCodes, setSuccessCodes] = useState([]);
    const [currIdx, setCurrIdx] = useState(0);

    const navigate = useNavigate();

    const isFailedCode = (code) => {
        if(failedCodes.some(_code => _code === code)) {
            return 1;
        }
        return 0;
    }

    const setFailedResult = (key) => {
        const result = getItem(key);
        if(result) {
            const newResult = Object.keys(result).reduce((acc, curr) => ({
                ...acc,
                [curr]: result[curr] + isFailedCode(curr),
            }), {})
            setItem(key, newResult);
        } else {
            const newResult = CODES.reduce((acc, curr) => ({
                ...acc,
                [curr]: isFailedCode(curr),
            }), {})
            setItem(key, newResult);
        }
    }

    useEffect(() => {
        if(!seconds) {
            setIsTested(true);
            return () => {}
        }

        setTimeout(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

    }, [seconds])

    useEffect(() => {
        if(isFinished) {
            const todayKey = getTodayKey("251");
            setFailedResult(todayKey);
            setFailedResult(getTotalKey("251"));
        }
    }, [isFinished])

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
        setSeconds(practiceTime);
        setIsTested(false);
    }

    const redirectToMain = () => {
        navigate("/");
    }

    const redirectToResult = () => {
        window.location.href = "/result"
    }

    return (
        <Stack
            direction={"column"}
            alignItems={"center"}
            spacing={2.5}
            width={"100%"}
        >
            {
                !isFinished ? (
                    <Stack
                        direction={"column"}
                        alignItems={"center"}
                        spacing={2.5}
                        width={"100%"}
                        sx={{
                            px: 1.25,
                        }}
                    >
                        <Typography
                            variant={"h1"}
                        >
                            {codes[currIdx]}
                        </Typography>
                        <PianoKeyboard
                            selectedCodes={[codes[currIdx], ]}
                            sx={{
                                maxWidth: 400,
                                maxHeight: 200,
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
                        width={"100%"}
                        sx={{
                            px: 1.25,
                        }}
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
                                maxWidth: 400,
                                maxHeight: 200,
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
                                maxWidth: 400,
                                maxHeight: 200,
                            }}
                        />
                        <Stack direction={"row"} spacing={2.5}>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                onClick={redirectToResult}
                            >
                                총 결과 보기
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                                onClick={redirectToMain}
                            >
                                다시 돌아가기
                            </Button>
                        </Stack>
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