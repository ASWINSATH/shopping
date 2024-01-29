import { CartState } from "../context/CartContext"

function Home() {

  const {state: {products}} = CartState();
  console.log(products);

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) =>{
          return<span>{prod.name}</span>
        })}

      </div>

    </div>
  )
}

export default Home