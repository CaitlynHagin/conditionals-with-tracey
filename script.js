console.log ('am linked')

// if else statements, functions 
//empty if
// if () {}



let myArray = [
    "choc",
    "coffee",
    "cake",
    "sweets",
    "burgers",
    "crisps",
    "biscuits",
    "toffee",
    "cheese",
    "water",
  ];

 // if(myArray.includes('cake'))
 // {
 //   console.log('Yummy I have cake to eat')
 // }


  if(myArray.includes('veg'))
  {
    console.log('Yuck who bought veg')
  } else
   {console.log('yes no veg found')
}

// Array = []
// Object = {}
// Function = ()


//LOOPS - comment out if using live server as the loop will run continuosly 

//array for loop
function loop() {


    let output = document.getElementById('output')
  

for (let i=0; i < myArray.length; i++) {

    console.log('i', i )

    let li = document.createElement('li')
    li.textContent = myArray[i]

   output.appendChild(li)

}

}
//append is add
//output is parent 

//loop();

let myObject = [
    {
      myItem:'one',
      myItem2: 'two',
    },
    {
      second: 'object2',
      secondObject: 'object3'
    }
  
  
  ]

//these wont run if we dont call a function 

function objectLoop() {

    console.log(Object.entries(myObject))

    for (     let[key,value]   of Object.entries(myObject)   ) {

        console.log( 'key', key)
        console.log( 'value',value)

        let item = Object.entries(value)

            console.log(item)

            item.forEach(items => {
                console.log(items)
            })

        }
    }



objectLoop()