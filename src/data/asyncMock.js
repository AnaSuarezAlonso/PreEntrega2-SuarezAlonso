export const items = [
  {
    id: 1,
    title: 'Air max',
    category: 'men',
    price: 120,
    thumbnail: '/src/assets/thumbnails/thumbnail-1.png',
    image:'/src/assets/sneaker-1.png',
    description: 'Comfortable, durable, and timeless: the SpeedFlex Pro is the ultimate favorite for a reason. Have your sneakers at home in 24/48 hours.'
  },
  {
    id: 2,
    title: 'AirGlide',
    category: 'women',
    price: 95,
    thumbnail: '/src/assets/thumbnails/thumbnail-2.png',
    image:'/src/assets/sneaker-2.png',
    description: 'Lightweight, breathable, and stylish: the AirGlide Xtreme offers unmatched performance. Have your sneakers at home in 24/48 hours'

  },
  {
    id: 3,
    title: 'SprintMaster',
    category: 'sales',
    price: 65,
    thumbnail: '/src/assets/thumbnails/thumbnail-3.png',
    image:'/src/assets/sneaker-3.png',
    description: 'Fast, agile, and dependable: the SprintMaster 3000 is your perfect running companion. Have your sneakers at home in 24/48 hours.'
  },
  {
    id: 4,
    title: 'UltraBoost',
    category: 'sales',
    price: 50,
    thumbnail: '/src/assets/thumbnails/thumbnail-4.png',
    image:'/src/assets/sneaker-4.png',
    description: 'Lightweight, sleek, and high-performance: the FusionLite Elite exceeds expectations. Have your sneakers at home in 24/48 hours.'
  },
  {
    id: 5,
    title: 'FusionLite',
    category: 'women',
    price: 110,
    thumbnail: '/src/assets/thumbnails/thumbnail-5.png',
    image:'/src/assets/sneaker-5.png',
    description: 'Lightweight, sleek, and high-performance: the FusionLite Elite exceeds expectations. Have your sneakers at home in 24/48 hours.'
  },
  {
    id: 6,
    title: 'PowerStride',
    category: 'kids',
    price: 80,
    thumbnail: '/src/assets/thumbnails/thumbnail-6.png',
    image:'/src/assets/sneaker-6.png',
    description: 'Powerful, supportive, and comfortable: the PowerStride Max is built for peak performance. Have your sneakers at home in 24/48 hours.'
  },
  {
    id: 7,
    title: 'TurboDash',
    category: 'men',
    price: 100,
    thumbnail: '/src/assets/thumbnails/thumbnail-7.png',
    image:'/src/assets/sneaker-7.png',
    description: 'Fast, fierce, and futuristic: the TurboDash Vortex is designed for speed. Have your sneakers at home in 24/48 hours.'
  },
  {
    id: 8,
    title: 'AeroSprint',
    category: 'kids',
    price: 50,
    thumbnail: '/src/assets/thumbnails/thumbnail-8.png',
    image:'/src/assets/sneaker-8.png',
    description: 'Dynamic, responsive, and efficient: the AeroSprint Dynamics keeps you moving forward. Have your sneakers at home in 24/48 hours.'
  }
]


export const getProducts = () => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(items)
    }, 200)
  })
}


export const getProductById = (id) => {
return new Promise((resolve, reject) => {
   const item = items.find((prod) => prod.id === id);
    if (item) {
        resolve(item);
    } else {
      reject({
        error: "Product not found"
      })
    }
  })
}

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve, reject)=> {
      resolve(items.filter((prod) => prod.category === categoryId))
      reject({error: "Category not found"})
  })
}
