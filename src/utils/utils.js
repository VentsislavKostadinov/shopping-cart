export const storeItemsInLocalStorage = (values) => localStorage.setItem("orderValues", JSON.stringify(values));

export const clearLocalStorage = () => localStorage.clear();

export const calculateTotalSum = (values, totalSum) => {
    let sum = 0;
    values.map(element => {
        sum += element.price;
        return totalSum(sum);
    })

};

export const addEventListeners = (e, func) => {
    document.addEventListener(e, func);
    document.addEventListener(e, func);
}

export const removeEventListeners = (e, func) => {
    document.removeEventListener(e, func);
    document.removeEventListener(e, func);
}