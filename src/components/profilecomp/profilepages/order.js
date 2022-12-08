import React from 'react'
import { useCart } from '../../../contexts/cart-context';

function OrderDetails() {
  const { cartState } = useCart();

  return (
    <div className='order-container'>
      <h3>my ordre details</h3>
      {cartState?.orders?.map((orderID, id) => (
        <p key={id}>{orderID}</p>
      ))}
    </div>
  )
}

export default OrderDetails
