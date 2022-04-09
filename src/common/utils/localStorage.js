import moment from "moment";

export const getItem = (key) => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
}

export const setItem = (key, value) => {
    const jsonValue = JSON.stringify(value);
    return localStorage.setItem(key, jsonValue);
}

export const removeItem = (key) => {
    return localStorage.removeItem(key);
}

export const getTodayKey = (key) => {
    const today = moment().format("YYYY-MM-DD");
    const todayKey = today + "_" + key;
    return todayKey;
}

export const getTotalKey = (key) => {
    return "total_" + key;
}