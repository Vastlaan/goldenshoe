import Link from 'next/link';
import styled from 'styled-components';
import Product from '../product_small'
import { SectionNarrow, ProductsConatiner} from '../../styles'
import {ProductProps} from '../../types'
import Heading from '../utils/heading'

interface ProductsShortProps{
  category: string;
  products: ProductProps[]
  link: string
}

export default function ProductsShortComponent({category, products, link}:ProductsShortProps) {

  const items = []    // think about paginations

   products.map(prod=>{
    if(items.filter(item=>item.group===prod.group).length === 0){
      items.push(prod)
    }
  })

  return (
    <SectionNarrow margin='0 auto 2.7rem auto'>

      <Heading text={category} />

      <ProductsConatiner>
        {items.map((item, i)=>{
          return(
            <Product key={`${i}-${item.displayName}`} item={item} />
          )
        })}
      </ProductsConatiner>
    </SectionNarrow>
  )
}
