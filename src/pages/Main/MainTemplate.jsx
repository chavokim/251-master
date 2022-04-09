import React, {useState} from "react";
import {Box, Button, Checkbox, FormControlLabel, Slider, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {PianoKeyboard} from "../../common/templates/PianoKeyboard";
import {CODES, codesToString} from "../../common/utils/codes";

export const MainTemplate = () => {
    const [selectedCodes, setSelectedCodes] = useState([]);
    const [practiceTime, setPracticeTime] = useState(10);
    const navigate = useNavigate();

    const handleSelectAll = (e) => {
        const {checked} = e.target;
        if(checked)
            setSelectedCodes(CODES);
        else
            setSelectedCodes([]);
    }

    const handleClick = (e) => {
        const {name} = e.target;

        if(name.length > 1) {
            e.stopPropagation();
            e.preventDefault();
        }

        setSelectedCodes(prev => {
            if(selectedCodes.some(code => code === name)) {
                return prev.filter(code => code !== name);
            }
            return [
                ...prev,
                name
            ]
        })
    }

    const handleStart = () => {
        const codesString = selectedCodes.reduce((acc, curr) => {
            if(!acc) {
                return curr;
            }
            return acc + "," +curr
        }, "");

        const params = new URLSearchParams({
            "codesString": codesString,
            "practiceTime": practiceTime
        });

        navigate(`/practice?${params.toString()}`);
    }

    return (
        <Stack
            direction={"column"}
            spacing={2.5}
            alignItems={"center"}
            width={"100%"}
            sx={{
                px: 1.25
            }}
        >
            <FormControlLabel
                control={<Checkbox onClick={handleSelectAll} />}
                label="Select All"
            />
            <Stack
                direction={"column"}
                alignItems={"center"}
            >
                <Typography
                    variant={"h5"}
                >
                        Selected Codes
                </Typography>
                <Typography
                    variant={"h6"}
                >
                    {codesToString(selectedCodes)}
                </Typography>
            </Stack>
            <PianoKeyboard
                selectedCodes={selectedCodes}
                handleClick={handleClick}
            />
            <Typography
                variant={"h5"}
            >
                Practice Time
            </Typography>
            <Stack
                direction={"row"}
                spacing={1}
                width={300}
            >
                <Box sx={{ minWidth: 240 }}>
                    <Slider
                        value={practiceTime}
                        onChange={(e) => setPracticeTime(e.target.value)}
                        step={1}
                        valueLabelDisplay="on"
                        max={60}
                        min={1}
                    />
                </Box>
                <TextField
                    type={"number"}
                    min={1}
                    max={60}
                    value={practiceTime}
                    onChange={(e) => setPracticeTime(e.target.value)}
                />
            </Stack>
            <Button
                disabled={!selectedCodes.length}
                variant={"contained"}
                onClick={handleStart}
            >
                Start Practice
            </Button>
        </Stack>
    )
}