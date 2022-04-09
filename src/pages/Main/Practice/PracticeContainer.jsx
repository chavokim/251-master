import React, {useEffect, useRef, useState} from "react";
import {PracticeTemplate} from "./PracticeTemplate";
import {shuffle} from "../../../common/utils/shuffle";

export const PracticeContainer = () => {
    const params = new URLSearchParams(window.location.search);
    const codesString = params.get("codesString");
    const practiceTime = Number(params.get("practiceTime"));

    console.log(practiceTime)

    const codes = codesString.split(",");

    return (
        <PracticeTemplate
            codes={shuffle(codes)}
            practiceTime={practiceTime}
        />
    )
}