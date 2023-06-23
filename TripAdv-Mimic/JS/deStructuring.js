

console.log("------------ deStructuring.js --------------")
const marketplace = {
    marketplaceName: 'My Marketplace',
    address: {
    //   street: '456 Market St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94101'
    },
    categories: [
      {
        categoryId: 'C1',
        name: 'Electronics',
        subcategories: [
          {
            subcategoryId: 'SC1',
            name: 'Computers',
            products: [
              {
                productId: 'P1',
                name: 'Laptop',
                brand: 'Brand 1',
                price: 999.99,
                specifications: {
                  display: '15.6 inches',
                  processor: 'Intel Core i7',
                  memory: '16GB RAM',
                  storage: '512GB SSD'
                },
                reviews: [
                  {
                    userId: 'U1',
                    username: 'User 1',
                    rating: 4,
                    comment: 'Great laptop!'
                  },
                  {
                    userId: 'U2',
                    username: 'User 2',
                    rating: 5,
                    comment: 'Excellent performance.'
                  }
                ]
              },
              {
                productId: 'P2',
                name: 'Desktop',
                brand: 'Brand 2',
                price: 1499.99,
                specifications: {
                  display: '24 inches',
                  processor: 'Intel Core i9',
                  memory: '32GB RAM',
                  storage: '1TB SSD'
                },
                reviews: [
                  {
                    userId: 'U3',
                    username: 'User 3',
                    rating: 4.5,
                    comment: 'Powerful machine!'
                  },
                  {
                    userId: 'U1',
                    username: 'User 1',
                    rating: 5,
                    comment: 'Amazing desktop.'
                  }
                ]
              }
            ]
          },
          {
            subcategoryId: 'SC2',
            name: 'Mobile Phones',
            products: [
              {
                productId: 'P3',
                name: 'Smartphone',
                brand: 'Brand 3',
                price: 699.99,
                specifications: {
                  display: '6.5 inches',
                  processor: 'Snapdragon 888',
                  memory: '8GB RAM',
                  storage: '128GB'
                },
                reviews: [
                  {
                    userId: 'U4',
                    username: 'User 4',
                    rating: 4.5,
                    comment: 'Great phone with an excellent camera.'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        categoryId: 'C2',
        name: 'Clothing',
        subcategories: [
          {
            subcategoryId: 'SC3',
            name: 'Men',
            products: [
              {
                productId: 'P4',
                name: 'Shirt',
                brand: 'Brand 4',
                price: 29.99,
                specifications: {
                  fabric: 'Cotton',
                  size: 'Large',
                  color: 'Blue'
                },
                reviews: []
              }
            ]
          },
          {
            subcategoryId: 'SC4',
            name: 'Women',
            products: []
          }
        ]
      }
    ]
  };

//----------------------------De-structuring--------------------------------------------------
const { marketplaceName = "name not available", 
            address: {  street: streetName = "street not available" , 
                        city: cityName = "city not available", 
                        state: stateCode, 
                        zipcode: zip
                    },
            categories = []
        } = marketplace || {}


//------------------------------------------------------------------------------

console.log("Categories in the MarketPlace: ",categories)
console.log("Total categories available: ",categories.length)

const subCategories = categories[0].subcategories

console.log("Products for the Subcategory:  ", subCategories[0].products)