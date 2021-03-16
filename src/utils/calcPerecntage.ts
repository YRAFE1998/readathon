export const calcPercent = (total: number, actual: number) => {
    if (total && actual) {
        return (actual * 100) / total;

    } else {
        return 0;
    }
}