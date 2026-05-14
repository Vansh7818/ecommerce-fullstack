import api from '../../utils/api';
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money'
import { DeliveryOptions } from './DeliveryOptions';

export function OrderSummary({ cart, deliveryOptions ,loadCart }) {
    // Added: Empty state UI for professional look
    if (cart.length === 0) {
        return (
            <div className="order-summary empty-cart" style={{ textAlign: 'center', padding: '40px' }}>
                <h2 style={{ color: '#c40000' }}>Your cart is empty.</h2>
                <p style={{ margin: '15px 0' }}>Looks like you haven't added anything yet!</p>
                <a href="/" className="button-primary link-button" style={{ 
                    padding: '10px 25px', 
                    textDecoration: 'none',
                    display: 'inline-block'
                }}>Shop Now</a>
            </div>
        );
    }

    return (
        <div className="order-summary">
                                 {cart.map((cartItem) => {
                                     // Safety Check: Ensure deliveryOptions exist before searching to prevent crash
                                     const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                                         return deliveryOption.id === cartItem.deliveryOptionId;
                                     });

                                     const deleteCartItem = async () => {
                                         try {
                                             // Fixed: Using centralized api instance for consistent deployment URLs
                                             await api.delete(`/api/cart-items/${cartItem.productId}`);
                                             await loadCart();
                                         } catch (error) {
                                             console.error("Failed to delete item:", error);
                                         }
                                     }

                                     // Added: Fallback for delivery date if options are still loading
                                     const deliveryDate = (selectedDeliveryOption && selectedDeliveryOption.estimatedDeliveryTimeMs)
                                         ? dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')
                                         : 'Calculating...';

                                     return (
                                         <div key={cartItem.productId} className="cart-item-container">
                                             <div className="delivery-date">
                                                 Delivery date: {deliveryDate}
                                             </div>
        
                                             <div className="cart-item-details-grid">
                                                 <img className="product-image"
                                                      src={cartItem.product?.image} />
        
                                                 <div className="cart-item-details">
                                                     <div className="product-name">
                                                         {cartItem.product?.name}
                                                     </div>
                                                     <div className="product-price">
                                                         {cartItem.product ? formatMoney(cartItem.product.priceCents) : ''}
                                                     </div>
                                                     <div className="product-quantity">
                                                         <span>
                                                             Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                                         </span>
                                                         <span className="update-quantity-link link-primary">
                                                             Update
                                                         </span>
                                                         <span className="delete-quantity-link link-primary"
                                                          onClick={deleteCartItem}
                                                          >
                                                             Delete
                                                         </span>
                                                     </div>
                                                 </div>
        
                                                 <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                                             </div>
                                         </div>
                                     );
                                 })}
         </div>
    );
}