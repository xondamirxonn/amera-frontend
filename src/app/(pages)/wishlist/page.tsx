import dynamic from 'next/dynamic'
import React from 'react'

const WishlistComponent = dynamic(() => import("@/app/components/wishlist/wishlist"), {ssr: false})

const WishListPage = () => {
  return (
    <div>
      <WishlistComponent    />
    </div>
  )
}

export default WishListPage