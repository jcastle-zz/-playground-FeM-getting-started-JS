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