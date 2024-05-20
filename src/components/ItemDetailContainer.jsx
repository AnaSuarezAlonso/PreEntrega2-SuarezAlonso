import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { getProductById } from '../data/asyncMock'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'

export default function ItemDetailContainer() {
  
  const [product, setProduct] = useState({})

  const {id} = useParams()

  useEffect(()=>{
    getProductById(Number(id))
      .then((res)=>{setProduct(res)})
  }, [])


  return (
    <div className="flex flex-col w-screen items-center justify-center mt-10 sm:mt-20 mb-20 sm:mb-40 px-8 lg:px-20 2xl:px-40">
      <ItemDetail product={product}>
        <ItemCount quantity={2} />
      </ItemDetail>
    </div>
  )
}
