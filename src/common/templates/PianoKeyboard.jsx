import React from "react";
import {WhiteButton} from "../../pages/Main/components/WhiteButton";
import {BlackButton} from "../../pages/Main/components/BlackButton";
import {Stack} from "@mui/material";

export const PianoKeyboard = ({selectedCodes, handleClick, sx}) => {
    const isSelected = (name) => {
        return selectedCodes.some(code => code === name);
    }

    return (
        <Stack
            direction={"row"}
            sx={{
                maxWidth: 500,
                maxHeight: 250,
                width: "100%",
                aspectRatio: "2",
                ...sx,
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
    )
}