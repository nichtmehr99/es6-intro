const laptops = [
    {id : 1, name: 'lenovo',price: 40000, country : 'USA'},
    {id : 2, name: 'dell',price: 50000, country : 'Chaina'},
    {id : 3, name: 'MSI',price: 60000, country : 'Japan'},
    {id : 4, name: 'Dream Machine',price: 80000, country : 'Poland'},
    {id : 5, name: 'Acer',price: 65000, country : 'Chaina'},
    {id : 6, name: 'Macbook',price: 85000, country : 'USA'},
    {id : 7, name: 'Macbook Pro',price: 180000, country : 'USA'}
]
// Map Method
// array er nam .map(singel element => element.______ )
const expensiveLaptop = laptops.filter(laptop=> laptop.price > 70000)
const normalPriceLaptop = laptops.filter(laptop=> laptop.price < 60000)
const price = laptops.reduce((previousCost , currentCost )=> previousCost - currentCost , 0 )
console.log(price)


// for each method laptops.forEach(laptop)