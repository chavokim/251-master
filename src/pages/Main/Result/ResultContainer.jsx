import React from "react";
import {ResultTemplate} from "./ResultTemplate";
import {getItem, getTodayKey, getTotalKey} from "../../../common/utils/localStorage";

export const ResultContainer = () => {
    const todayResult = getItem(getTodayKey("251"));
    const totalResult = getItem(getTotalKey("251"));

    return (
        <ResultTemplate
            todayResult={todayResult}
            totalResult={totalResult}
        />
    )
}