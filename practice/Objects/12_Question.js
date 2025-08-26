//  Problem: Mini Product List + Cart Summary

const products = [
  {
    id: 1,
    productName: "Asus Laptop 13 inch | 16GB RAM | 512 SSD Storage | Windows 11",
    category: "laptop",
    inStock: true,
    price: 30000,
    ratings: 3.5
  },
  {
    id: 2,
    productName: "DELL Laptop 14 inch | 8GB RAM | 512 SSD Storage | Windows 11",
    category: "laptop",
    inStock: true,
    price: 22000,
    ratings: 4.0
  },
  {
    id: 3,
    productName: "Macbook Air 13 inch | 16GB RAM | M3 Chip | 256 GB SSD | macOS Sequoia",
    category: "laptop",
    inStock: true,
    price: 62000,
    ratings: 4.5
  },
  {
    id: 4,
    productName: "Intel Core i5 11th Gen Desktop Processor",
    category: "Processor",
    inStock: true,
    price: 20000,
    ratings: 4.0
  },
  {
    id: 5,
    productName: "AMD Ryzen 3 Desktop Processor",
    category: "Processor",
    inStock: true,
    price: 10000,
    ratings: 4.5
  }
  , {
    id: 6,
    productName: "Logitech Wired Keyboard and Mouse Combo",
    category: "accessories",
    inStock: true,
    price: 3000,
    ratings: 4.0
  }
  , {
    id: 7,
    productName: "Zebronics Wired Keyboard and Mouse Combo",
    category: "accessories",
    inStock: true,
    price: 1000,
    ratings: 3.5
  }
  , {
    id: 8,
    productName: "Zebronics Zeb-877b-cronus Mid Tower Cabinet",
    category: "accessories",
    inStock: true,
    price: 2000,
    ratings: 4.5
  }
  , {
    id: 9,
    productName: "Ant Value X1 ATX Mid Tower Case",
    category: "accessories",
    inStock: true,
    price: 1500,
    ratings: 4.0
  }
  , {
    id: 10,
    productName: "Ant Esports GS170 Gaming Speaker",
    category: "accessories",
    inStock: true,
    price: 900,
    ratings: 3.5
  }
  , {
    id: 11,
    productName: "Zebronics Zeb-WARRIOR 2.0 Multimedia Headset",
    category: "accessories",
    inStock: true,
    price: 2000,
    ratings: 4.5
  }
];

// map → Extract just the product names for a dropdown list

const productsNames = products.map((product) => {
  return product.productName;
});

// console.log(productsNames);


// filter → Show only laptops under ₹25,000
const productUnder25K = products.filter(function (product) {
  return product.price < 25000 && product.category === "laptop";
});

console.log(productUnder25K);


// reduce → Find total value of all Accessories in stock
const totalValueOfStock = products.reduce((acc, cuv) => {
  return acc + cuv.price;
}, 0);

console.log(totalValueOfStock);


// some → Do we have any product cheaper than ₹1000?
const cheaperProduct1K = products.some((product) => product.price < 1000);
console.log(cheaperProduct1K);


// every → Are all products in stock?
const productsInStock = products.every((product) => product.inStock);
console.log(productsInStock);


// find → Get the product with id = 3
const productWith3Id = products.find(product => product.id == 3);
console.log(productWith3Id);


// findIndex + splice → Remove the product with id = 7 (mutates array)
const indexNumber = products.findIndex((product) => {
  return product.id === 7;
});

console.log(products.length)

products.splice(indexNumber, 1);

console.log(products.length)


// reduce + map → Calculate average rating per category

const ratingsByCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = { total: 0, count: 0 };
  }

  acc[product.category].total += product.ratings;
  acc[product.category].count += 1;
  return acc;
}, {});

console.log(ratingsByCategory);


// Bonus — combine methods: Get top 3 highest rated products
const top3RatedProducts = products.filter(product => product.ratings >= 4).sort((a,b) => b.ratings - a.ratings).slice(0,3).map(product => product.productName);

console.log(top3RatedProducts)

