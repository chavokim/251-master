import React, {useState} from "react";
import {Button, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import {WhiteButton} from "./components/WhiteButton";
import {BlackButton} from "./components/BlackButton";
import {useNavigate} from "react-router-dom";

export const MainTemplate = () => {
    const [selectedCodes, setSelectedCodes] = useState([]);
    const navigate = useNavigate();

    const codes = [
        "C", "Db", "D", "Eb", "E", "F",
        "F#", "G", "Ab", "A", "Bb", "B",
    ]

    const compare = (l, r) => {
        const lIdx = codes.findIndex(ele => ele === l);
        const rIdx = codes.findIndex(ele => ele === r);

        if(lIdx > rIdx)
            return 1;

        return -1;
    }

    const handleSelectAll = (e) => {
        const {checked} = e.target;
        if(checked)
            setSelectedCodes(codes);
        else
            setSelectedCodes([]);
    }

    const isSelected = (name) => {
        return selectedCodes.some(code => code === name);
    }

    const handleClick = (e) => {
        const {name} = e.target;

        if(name.length > 1) {
            e.stopPropagation();
            e.preventDefault();
        }

        setSelectedCodes(prev => {
            if(isSelected(name)) {
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
                    {
                        selectedCodes.length ? selectedCodes.sort(compare).reduce((acc, curr) => {
                            if(!acc)
                                return curr
                            return acc + ", " + curr
                        }, "") : "None"
                    }
                </Typography>
            </Stack>
            <Stack
                direction={"row"}
                sx={{
                    width: 500,
                    height: 250
                }}
            >
                <WhiteButton
                    name="C"
                    onClick={handleClick}
                    selected={isSelected("C")}
                >
                    <BlackButton
                        name="Db"
                        onClick={handleClick}
                        selected={isSelected("Db")}
                    />
                </WhiteButton>
                <WhiteButton
                    onClick={handleClick}
                    name="D"
                    selected={isSelected("D")}
                >
                    <BlackButton
                        name="Eb"
                        onClick={handleClick}
                        selected={isSelected("Eb")}
                    />
                </WhiteButton>
                <WhiteButton
                    name="E"
                    onClick={handleClick}
                    selected={isSelected("E")}
                />
                <WhiteButton
                    name="F"
                    onClick={handleClick}
                    selected={isSelected("F")}
                >
                    <BlackButton
                        name="F#"
                        onClick={handleClick}
                        selected={isSelected("F#")}
                    />
                </WhiteButton>
                <WhiteButton
                    name="G"
                    onClick={handleClick}
                    selected={isSelected("G")}
                >
                    <BlackButton
                        name="Ab"
                        onClick={handleClick}
                        selected={isSelected("Ab")}
                    />
                </WhiteButton>
                <WhiteButton
                    name="A"
                    onClick={handleClick}
                    selected={isSelected("A")}
                >
                    <BlackButton
                        name="Bb"
                        onClick={handleClick}
                        selected={isSelected("Bb")}
                    />
                </WhiteButton>
                <WhiteButton
                    name="B"
                    onClick={handleClick}
                    selected={isSelected("B")}
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