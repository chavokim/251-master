import {Button, styled} from "@mui/material";

export const BlackButton = styled(Button)(({theme, ...props}) => ({
    zIndex: 1,
    border: "1px solid #000",
    borderRadius: "0 0 3px 3px",
    boxShadow: "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5)",
    background: props.selected ?
        "linear-gradient(to right,#999 0%,#666 100%)" : "linear-gradient(45deg,#222 0%,#555 100%)",
    position: "absolute",
    height: "50%",
    width: "50%",
    padding: 0,
    minWidth: 0,
    top: 0,
    right: "-25%",
}))