var Groceries = /** @class */ (function () {
    function Groceries(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.groceryItem = name + ", " + quantity + ", " + price;
    }
    return Groceries;
}());
function groceryList(groceries) {
    return "Product Name: " + groceries.name + " | " + "Quantity " + groceries.quantity + " | " + "Price: $ " + groceries.price;
}
var Milk = new Groceries("Milk", 3, 12.49);
var eggs = new Groceries("Eggs", 2, 6.99);
var apples = new Groceries("Apples", 5, 8.62);
document.body.textContent = groceryList(Milk) + groceryList(eggs) + groceryList(apples);
