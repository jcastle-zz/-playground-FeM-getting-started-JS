console.log('it works!');

/*
Values 
- JS does not distinguish between numbers w/ and w/o decimals.
- Primitive vs. non-primitive values. Primitive are simple data types (numbers, strings) and non-primitive (arrays, objects).
- Array - ordered collection of values, have a numerical position to assist with manipulation.
- Values represent tasks we want to accomplish - operations with numbers for math, strings for text.
*/

/*
Operations
- Arithmetic - possible to do math.
- Concat - use + to pull strings together. The + operator is considered overloaded, it has more than one kind of behavior, arithmetic and concatenate.
- Operators have operands which is the value that is going to be operated on by the operator. 3 + 4, operator is +, operands are 3 & 4. There are binary operators (two values) and unary operator (one value like !).
- ! is the negation or flipping of a boolean value. 
- == - loosey equals operator. 
- Equality - == and ===.
- Logical operator - || - stand for or. Assess whether one or the other results in true. Compliment is && which is how we say and to assess both values to true.
*/

/*
Type
- Pertains to kind of a value. Number, string, etc.
*/
console.log(typeof(42));

/*
Variable
- Place in memory that stores a symbolic representation of a value.
- Some values only used with variables - ++, +=
- ++ increment by one and add to current value
- += increment by one only
*/
var name = 'Joe Castle';
var age = 25;
age = 35;

var friends = ['Brandon', 'Smith'];

console.log(friends.length);
console.log(friends[1]);

/*
Expressions and statements
- Expressions - a phrase. 
- Statements - very thing from start to end. Almost all end with ;.
*/
var age = 39; // statement
age = 1 + (age * 2); // 2 is an expression & a literal, age is an expression, age * 2, 1, 1 +, age =. All six expressions part of the full statement.
console.log(age);

/*
If & else
- Decisions - decide if user has added an item to a shopping cart. Have to decide if item is in inventory to sell it.
- Primary way to do decisions is if statement.
*/
var age = 39;
if (age >= 18) {
    console.log('You are old');
} else {
    console.log('You are young');
}

/*
Loops
- Repeat something over and over again.
*/
var students = ['Sara', 'Joe'];

for (let i = 0; i < students.length; i++) {
    console.log(`Hello ${students[i]}`);
}

for (let student of students) {
    console.log(`Hello ${student}`);
}

while (students.length > 0) {
    let student = students.pop();
    console.log(student);
}

/*
Functions - contain a collection of statements and do something at specific time periods. Computer science term is a procedure.
- `` used for interpolated strings.
- Procedure does not give anything back.
*/
function greetStudent(student) {
    console.log(`Hello ` + student);
}
greetStudent('Joe');

function timeRemaining(timeElapsed, endTime) {
    return endTime - timeElapsed;
}
var left = timeRemaining(42, 240);
console.log(left);

/*
Three Pillars of JS.
1. Types/coercion
    - Primitive types
        - "In JS, everything is an object" - not true! because we have primitive types
        - undefined, string, number, boolean, object, symbol, null (behaves strangely, don't get back what we expect)
        - In JS, variables don't have types, values do
    * Special values 
        - NaN - most think it is "not a number" but not necessarily true, indicates invalid numeric value
        - new - used with object(), array(), function(), date(), RegExp(), error() - instantiate new instances. Do not use new with string(), number(), and boolean().
    - Converting types 
        - Going from number to a string and back. One type of implicit conversion is concatenation (number to string).
        - Booleans - falsy and truthy - means which values when converted to boolean become true or false.
            - Falsy - "", 0, -0, null, NaN, false, undefined.
            - Truthy - "string", 23, {a:1}, [1:3], true, function(){}. Infinitely long list of true values. Basically falsy then everything else.
        - Coercion best practices - explicit vs implicit coercion. "A quality JS program always embraces coercion, making sure the types involved in every operation are clear." Make it obvious if doing math, everything is a number. 
    - Checking equality - checking values. 
        - == vs. === 
            - == - allows coercion, used when types are different.
            - === - disallows coercion, used when types are the same.
            - When types are the same, the double and triple equals do the same thing.
            - Only when types are different, do double and triple equals have different behavior.
    - Is the coercion helpful? Is it helpful to me or not. 
        - == - is not really about comparisons of unknown types. Should make types obvious when making comparisons. If you know the types then you can decide when to use == equals.
        - JS has a dynamic system to use coercion.
2. Scope
    - Nested scope
        - Scope - where in the program to look for things.
        * Special values - undefined and undeclared. Distinctly different, undefined has no value and undeclared was never declared in the program.
        - Function expression - function that is assigned as a value. "First class citizen." A value that can be passed around.
        - IIFEs - Immediately Invoked Function Expression - Function executed immediately after function expression is described as a value. Creates a new block of scope.
        - Block scoping - Instead of an IIFE, use {} with let. AKA encapsulation.
    - Closure 
        - Have to understand scope before we can understand closure.
        - Closure is when a function remembers variables outside of it even if you pass that function elsewhere.
3. this/prototypes
    - this - this keyword references an execution context for when function is called. Determined entirely by how function was called. This-aware function can have a different context each time it is called. This is used in dynamic context. 
    - prototypes - need to understand this keyword to use prototypes. More common now to use class.
    - class{} - layered on top of prototype system. Looks more like class design in C++ or Java. 
*/