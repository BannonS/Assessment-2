///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce(function(acc, cart) {
    return acc + cart.price
}, 0);

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let totalCostBT = cartTotal + (cartTotal * tax)
    let finalcost = totalCostBT - couponValue    
        return finalcost.toFixed(2)
    }
console.log(calcFinalPrice(24.97, 10, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE:
my properties would be name, address, phonenumber, past orders
name: important to keep track of whos order is coming in and to make sure each order goes to the correct person after baking.
address: important for delivary purposes or to check if the customer si within the boundary of the stores limits
phonenumber: important so that the restuarant can contact the costumer with deals, problems with the order, or delivery confirmation.
past orders: would be useful just in case the customer would like to order something that they ordered before and make it easier.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerPage = {
    Name:`customer's name`,
    Address:`customer's home address`,
    phoneNumber: `customer's cell or home phone`,
    pastOrders: `customer's past orders(past 3 months)`
}