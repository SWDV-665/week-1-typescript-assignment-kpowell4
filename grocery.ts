class Groceries {
    groceryItem: string;
    constructor(public name: string, public quantity: number, public price: number) {
        this.groceryItem = name + ", " + quantity + ", " + price;
    }
}

interface groceryItem {
    name: string;
    quantity: number;
    price: number;
}

function groceryList (groceries: groceryItem) {
    return "Product Name: " + groceries.name + " | " + "Quantity " + groceries.quantity + " | " + "Price: $ " + groceries.price;
}


let Milk = new Groceries ("Milk", 3, 12.49)
let eggs = new Groceries ("Eggs", 2, 6.99)
let apples = new Groceries ("Apples", 5, 8.62)

document.body.textContent = groceryList(Milk) + groceryList(eggs) + groceryList(apples)
