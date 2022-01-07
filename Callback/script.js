/*
let a, b, c, d;

PromptUser("Input first Number", (err, value1) => {
  if (err) {
    return handleError(err);
  }
  a = Number(value1);
  PromptUser("Input second Number", (err, value2) => {
    if (err) {
      return handleError(err);
    }
    b = Number(value2);
    PromptUser("Input third Number", (err, value3) => {
      if (err) {
        return handleError(err);
      }
      c = Number(value3);
      PromptUser("Input fourth Number", (err, value4) => {
        if (err) {
          return handleError(err);
        }
        d = Number(value4);
        document.body.append(`The sum is ${a + b + c + d}`);
      });
    });
  });
});

function handleError(err) {
  document.body.append(`Error: ${err.message}`);
}
function PromptUser(question, callback) {
  const wrapper = document.createElement("div");
  const text = document.createElement("p");
  const input = document.createElement("input");
  const cancel = document.createElement("button");
  const confirm = document.createElement("button");

  confirm.innerHTML = "OK";
  cancel.innerHTML = "Cancel";
  text.innerHTML = question;

  wrapper.appendChild(text);
  wrapper.appendChild(input);
  wrapper.appendChild(cancel);
  wrapper.appendChild(confirm);

  document.body.appendChild(wrapper);

  confirm.addEventListener("click", () => {
    callback(undefined, input.value);
    document.body.removeChild(wrapper);
  });

  cancel.addEventListener("click", () => {
    callback(new Error("Cancelled"));
    document.body.removeChild(wrapper);
  });
}
*/

/*
function makeUpperCase(value) {
    console.log(value.toUpperCase());
  }
  
  function reverseString(value) {
    console.log(value.split("").reverse().join(""));
  }
  
  function handleName(name, cb) {
    const fullname = `${name} is a good`;
    console.log(fullname);
    cb(fullname);
  }
  
  handleName("Priya", makeUpperCase);
  
  // makeUpperCase is used as a call
  
  handleName("Priya", reverseString);
*/

/*
  const time = 1000;
//Raise a dough
function raiseDough(callback) {
  console.log("Waiting for dough");
  setTimeout(() => {
    console.log("Dough is ready");
    callback();
  }, 3 * time);
}

function rollDough(callback) {
  console.log("Rolling the dough");
  setTimeout(() => {
    console.log("Dough is rolled");
    callback();
  }, 2 * time);
}

function pourSauce(callback) {
  console.log("Pouring sauce");
  setTimeout(() => {
    console.log("Sauce is poured");
    callback();
  }, 1 * time);
}

function addToppings(callback) {
  console.log("Adding toppings");
  setTimeout(() => {
    console.log("Toppings are added");
    callback();
  }, 1 * time);
}

function bakePizza(callback) {
  console.log("Baking the pizza");
  setTimeout(() => {
    console.log("Pizza is ready");
    callback();
  }, 8 * time);
}

function deleiverPizza(callback) {
  console.log("Deleivering the pizza");
  setTimeout(() => {
    console.log("Pizza is delivered");
    callback();
  }, 5 * time);
}

raiseDough(() => {
    rollDough(() => {
      pourSauce(() => {
        addToppings(() => {
          bakePizza(() => {
            deleiverPizza(() => {
              console.log("Pizza is delivered Customer Successfully");
            });
          });
        });
      });
    });
  });
*/

const countdown= document.querySelector(".countdown");
let time=10;
countdown.innerText=time--;
setTimeout(()=>{
    countdown.innerText=time--;
    setTimeout(()=>{
        countdown.innerText=time--;
        setTimeout(()=>{
            countdown.innerText=time--;
            setTimeout(()=>{
                countdown.innerText=time--;
                setTimeout(()=>{
                  countdown.innerText=time--;
                  setTimeout(()=>{
                    countdown.innerText=time--;
                    setTimeout(()=>{
                        countdown.innerText=time--;
                        setTimeout(()=>{
                            countdown.innerText=time--;
                            setTimeout(()=>{
                                countdown.innerText=time--;
                                setTimeout(()=>{
                                    countdown.innerText="Happy Independence Day";
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
              },1000);
            },1000);
        },1000);
    },1000);
},1000);