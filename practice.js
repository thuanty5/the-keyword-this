//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //refer to the object that is being called

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer

      //1.Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
      //function in global scope the "this" will be pointing at the window object

      //2.Whenever a function is called by a preceding dot, the object before that dot is this.
      //whatever object is attach to the left of a function, "this" is pointing at that objact

      //3.Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
      //"this" is the object that was created with a new function constructor
      
      //4.Whenever JavaScript’s call or apply method is used, this is explicitly defined.
      //"this" is whatever call or apply puts in as parameter

  // 3) What does .bind do?

      //Answer
      //copy given function with specified this value and initial arguments


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

    var user = {
      username: "thuan_t",
      email: "email@email.com",
      getUsername: function(){
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here

  var Car = function(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

Car.move = 0;
Car.prototype.moveCar = function() {
  return this.move += 10;
};

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};



// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.


//Note(no tests)

  //Code Here

  var getPriusYear = getYear.bind(prius);
  var getMustangYear = getYear.bind(mustang);
  console.log(getPriusYear());
  console.log(getMustangYear());



//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUser = function() {
 return this.username;
};

// var userName = getMyUser.bind(myUser); //Fix this
var userName = getMyUser.call(myUser);
console.log(userName());
//check code

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  //returns ==> "iliketurtles"
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  //to myUser

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

