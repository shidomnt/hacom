import React, { useEffect, useState } from 'react'

export default function ProductCard({ sku }) {
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const result = productProvider.getProductBySku(sku);
  //   if (result.success) {
  //     setProduct(result.data)
  //   } else {
  //     setProduct(null)
  //   }
  // }, [sku])

  return (
    product ? 
    (<div>
        product
    </div>) :
    (<div>Loading</div>)
  )
}

