import {Button, styled} from "@mui/material";

export const WhiteButton = styled(Button)(({theme, ...props}) => ({
    background: props.selected ?
        "linear-gradient(to bottom,#bbb 0%,#dedede 100%)" : "linear-gradient(to bottom,#eee 0%,#fff 100%)",
    boxShadow: "-1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2)",
    borderRadius: "0 0 5px 5px",
    borderBottom: "1px solid #bbb",
    borderLeft: "1px solid #bbb",
    flexGrow: 1,
    position: "relative",
    padding: 0,
    minWidth: 0,
}));
