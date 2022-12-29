export const storeItemsInLocalStorage = (values) => localStorage.setItem("orderValues", JSON.stringify(values));

export const clearLocalStorage = () => localStorage.clear();

export const calculateTotalSum = (values, totalSum) => {
    let sum = 0;
    values.map(element => {
        sum += element.price;
        return totalSum(sum);
    })

};