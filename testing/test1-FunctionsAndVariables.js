// Functions as Variables
// Read the instructions carefully & do NOT use ChatGPT. Skip one if it's too hard. 
// No problem if you can't do it, just try your best and we'll discuss
// There are two ways to create a function in JS. 
// Create the following two functions in the two different ways

// 1. Create a function called adder that takes two numbers and returns the sum of them
// ...your code here...
// Uncomment the next line when your code is ready
// console.log(adder(5,6))

// 2. Create a function called multiplier that takes in three numbers and returns the product of them
// ...your code here...
// Uncomment the next line when your code is ready
// console.log(multiplier(5,6,2))

// 3. Invoke the function adder with two arguments: multiplier(3,3,3) and multiplier(2,2,2)
// ...your code here...

// Leave this function alone
const randomNumberGenerator = () => Math.floor(Math.random() * 10)

// 4. Create a function called invoker which takes a function as an argument and then invokes that function
// ...your code here...
// Uncomment the next line when your code is ready
// console.log(invoker(randomNumberGenerator))

// 5. Invoke invoker with an anonymous function (or lambda) that takes no arguments and returns 'hello'
// ...your code here...

// BONUS. Create a function called superInvoker
// superInvoker will take three arguments
// arg1 is a function which takes two arguments
// arg2 and arg3 are numbers
// superInvoker should invoke the function arg1 with the arguments arg2 and arg3
// ...your code here...
// Uncomment the next line when your code is ready
// console.log(superInvoker(adder,6,2))