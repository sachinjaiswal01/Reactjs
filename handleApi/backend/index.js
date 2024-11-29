import express from "express";

const app = express();



app.get('/api/products',(req,res)=>{
    const products = [
        {
            id: 1,
            name: 'Modern Chair',
            price: 300,
            image: 'https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            id: 2,
            name: 'Stylish Lamp',
            price: 250,
            image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            id: 3,
            name: 'Wooden Table',
            price: 500,
            image: 'https://images.pexels.com/photos/1264074/pexels-photo-1264074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            id: 4,
            name: 'Comfy Sofa',
            price: 200,
            image: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            id: 5,
            name: 'Glass Vase',
            price: 450,
            image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }                  
    ]

    if(req.query.search){
        const filterProducts = producst.filter(producst => products.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products);
    },3000);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});