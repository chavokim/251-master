export const CODES = [
    "C", "Db", "D", "Eb", "E", "F",
    "F#", "G", "Ab", "A", "Bb", "B",
]

const compare = (l, r) => {
    const lIdx = CODES.findIndex(ele => ele === l);
    const rIdx = CODES.findIndex(ele => ele === r);

    if(lIdx > rIdx)
        return 1;

    return -1;
}

export const codesToString = (codes) => {
    return (
        codes.length ? codes.sort(compare).reduce((acc, curr) => {
            if(!acc)
                return curr
            return acc + ", " + curr
        }, "") : "None"
    )
}