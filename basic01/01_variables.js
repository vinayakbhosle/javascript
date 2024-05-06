const accountId=12345 //once you assign the value , you cant change
let accountEmail="abc@gmail.com"  // its access is limited to the block in which it is declared
var accountPassword="12356" //Var can be declared and accessed globally.
accountCity="maharastra"


let accountName;    //output will be undefined

//testing 
/*
in a same scope
you can redeclare var variable multiple times
but you cant do it for let variable
ex: try this
var accountPassword="125356"
let accountEmail="abcas@gmail.com"
 */
var accountPassword="125356"
let accountEmail="abcas@gmail.com" //SyntaxError: Identifier 'accountEmail' has already been declared
console.log(accountPassword);

/*
notes
https://codedamn.com/news/javascript/difference-between-let-and-var-in-javascript
It means that a variable declared with var can be accessed anywhere within the current function or global scope, while a variable declared with let can only be accessed within the block it was declared. This can be useful for preventing variable declarations from accidentally colliding or overwriting one another.

For example, if you declare a var variable inside a for loop, it will still be accessible outside the loop. However, if you declare a let variable inside the same for loop, it will only be accessible within the loop itself.

In addition, let declarations cannot be redeclared within the same scope, whereas var declarations can be. This can help prevent errors and bugs in your code.
 */
