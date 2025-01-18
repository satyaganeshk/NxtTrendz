// Write your code here
import Popup from 'reactjs-popup'

import Payment from '../Payment'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
          </div>
          <Popup
            modal
            trigger={
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="checkout-button btn btn-warning w-40"
                >
                  Checkout
                </button>
              </div>
            }
            position="top left"
          >
            {close => <Payment close={close} />}
          </Popup>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
