
function greeting () {
let timeIs = 21
if (timeIs < 11) {
    console.log("Good Morning Karin!");
}
else if (timeIs < 16) {
    console.log("Good Afternoon Alex!");
}
else if (timeIs < 20) {
    console.log("Good Evening Kristofer!");
}
else {
    console.log("Good Evening Everybody!");
}}
greeting ();

let weeksDone = 3;
let startProject = weeksDone == 3;
let endProject = weeksDone >= 8;

console.log(startProject);
console.log(endProject);

const itemMap = {
    tShirt: 200,
    trousers: 650,
    longsleeve: 400,
    jacket: 1000
};

//next function didn´t work with if else 
function getPrice(item) {
    if (item === "tShirt") {
        return 200;
        console.log("200");
    } else if (item === "trousers") {
        return 650;
        console.log("650");
    } else if (item === "longsleeve") {
        return 400;
        console.log("400");
    } else if (item === "jacket") {
        return 1000;
        console.log("1000");
    }}

//getPrice(itemMap);


let items = [
    {itemName: "tShirt",
    price: 200
},
    {itemName: "trousers",
    price: 650
},
    {itemName: "longsleeve",
    price: 400
},
    {itemName: "jacket",
    price: 1000
},
];

for (const [itemName, tShirt] of Object.entries(  {itemName: "tShirt",
    price: 200
})) {
    console.log(`${itemName}: ${tShirt}`);
  }
  
  for (const [itemName, trousers] of Object.entries(  {itemName: "trousers",
  price: 650
})) {
  console.log(`${itemName}: ${trousers}`);
}

for (const [itemName, longsleeve] of Object.entries(  {itemName: "longsleeve",
    price: 400
})) {
    console.log(`${itemName}: ${longsleeve}`);
  }
  
  for (const [itemName, jacket] of Object.entries(  {itemName: "jacket",
  price: 1000
})) {
  console.log(`${itemName}: ${jacket}`);
};

const purchase1 = {};

purchase1.price = 850;
console.log(purchase1.price);
console.log(purchase1);

const quantity = "y";
purchase1[quantity] = 2;
console.log(purchase1[quantity]);
console.log(purchase1); 

const purchase = [
    {name: `tShirt`, price: 250, quantity: 2},
    {name: `trousers`, price: 650, quantity: 1},
    {name: `jacket`, price: 1000, quantity: 1},
];

function calculateTotalPrice(purchase) {
    let totalPrice = 0;
    for (let i = 0; i < purchase.length; i++) {
        totalPrice += purchase[i].price * purchase[i].quantity;
    }
    return totalPrice;
};

const totalPrice = calculateTotalPrice(purchase);
console.log(totalPrice);

let amount = (totalPrice);
let freeDeliveryBe = amount >= 2000;
let paidDeliveryBe = amount < 1750;

if (amount >= 2000) {
    console.log("You have free delivery!");
  }
  else {
    console.log("Delivery cost 45 kr!");
  };

const newMember = [{
    client: "Nick",
    membershipLevel: "premium", 
    purchase: [
        {name: `tShirt`, price: 250, quantity: 2},
        {name: `trousers`, price: 650, quantity: 1},
        {name: `jacket`, price: 1000, quantity: 1},
    ],
},
{
    client: "Peter",
    membershipLevel: "golden",
},
{   
    client: "Hanna",
    membershipLevel: "silver",
},
{
    client: "Howard",
    membershipLevel: "",
},
];

if (!newMember.membershipLevel) {
    console.log("You have 7% discount!");
}
else {
console.log("");
  };


  for (const [client, Nick] of Object.entries( {client: "Nick", 
})) {
    console.log(`${client}: ${Nick}`);
  };

    console.log(newMember[0])

  
