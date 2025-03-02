type Pizza = {
    id: number
    name: string,
    price: number
};

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
};


let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

const orderQueue: Order[] = []

//Void return type - it doesn't return anything, it's just perform some operation
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++, //adding id property to pizzaObj
        ...pizzaObj
    }
    menu.push(newPizza);
    return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)  // we are checking does the selected pizza exist
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

/**  // Generic Function ----------------------
 * Challenge: add types our generic `addToArray` function. It should work
 * for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
 */

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item);
    return array;
}

/**
 * Mini-challenge: what should be passed in as the generic type on line 63, 64?
 */

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })

console.log(menu)
console.log(orderQueue)


/**
 * Challenge: Teach TS what data type should be used for the 
 * orderId in the completeOrder function. Then check for any
 * additional warnings TS comes up with and fix those.
 */

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId); //if the order id provided doesn't exist in the orderQueue, the order value will be undefined
    if (!order) {
        console.log(`${orderId} doesn't exist`);   //handling the undefined order
        return
    }
    order.status = "completed"
    return order
}

/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 * 
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */

// export makes it explicit, if in case the parameter is neither string nor number then we can handle the error in plain javaScript such as in place of undefined explained in else block
// type narrowing - writing a function where we don't necessarily know the data type of that function is. TypeScript will expect us to narrow down it.


/**
 * Challenge (part 1): add a return type to the getPizzaDetail function.
 * 
 * NOTE: you're very likely going to get a big TS warning once you do this 😅
 * Don't fret, we'll address this warning next!
 */

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
      return menu.find((pizza) => { pizza.name.toLowerCase() === identifier.toLowerCase() })
    } else if (typeof identifier === "number") {
        return menu.find((pizza) => {pizza.id === identifier})
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }

}

// addNewPizza({name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({name: "BBQ Chicken", price: 12 })
// addNewPizza({name: "Spicy Sausage", price: 11 })


// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Anchovy")
// placeOrder("Veggie")
// completeOrder(2)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderHistory)