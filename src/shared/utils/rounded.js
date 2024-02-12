export const rounded = (num, digits) => {
    return (Math.round((num) * 100) / 100).toFixed(digits);
}
