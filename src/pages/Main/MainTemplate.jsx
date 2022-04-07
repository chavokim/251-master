import React, {useState} from "react";
import {Button, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {PianoKeyboard} from "../../common/templates/PianoKeyboard";
import {CODES, codesToString} from "../../common/utils/codes";

export const MainTemplate = () => {
    const [selectedCodes, setSelectedCodes] = useState([]);
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

        const params = new URLSearchParams({ "codesString": codesString });

        navigate(`/practice?${params.toString()}`);
    }

    return (
        <Stack
            direction={"column"}
            spacing={2.5}
            alignItems={"center"}
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