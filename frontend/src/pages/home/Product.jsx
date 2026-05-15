import React, { useState, memo } from 'react';
import api from '../../utils/api';
import { formatMoney } from '../../utils/money';

export const Product = memo(function Product({ product , loadCart }) {
    const [quantity , setQuantity] = useState(1);
    const addToCart = async () => {
        try {
            await api.post('/api/cart-items', {
                productId : product.id,
                quantity
            });
            await loadCart();
        } catch (error) {
            console.error("Failed to add to cart:", error);
        }
    };
                                const selectQuantity = (event) => {
                                        const quantitySelected = Number(event.target.value);
                                        setQuantity(quantitySelected);
                                        
                                    };

    return (
        <div  className="product-container"
            data-testid="product-container">

                                <div className="product-image-container">
                                    <img
                                        className="product-image"
                                        data-testid="product-image"
                                        src={product.image.startsWith('/') ? product.image : `/${product.image}`}
                                        alt={product.name}
                                        loading="lazy"
                                        decoding="async"
                                        width="250"
                                        height="250"
                                    />
                                </div>

                                <div className="product-name limit-text-to-2-lines">
                                    {product.name}
                                </div>

                                <div className="product-rating-container">
                                    <img
                                        className="product-rating-stars"
                                        data-testid="product-rating-stars-image"
                                        src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
                                        alt="rating"
                                        loading="lazy"
                                        width="100"
                                        height="20"
                                    />
                                    <div className="product-rating-count link-primary">
                                        {product.rating.count}
                                    </div>
                                </div>

                                <div className="product-price">
                                   {formatMoney(product.priceCents)}
                                </div>

                                <div className="product-quantity-container">
                                    <select value={quantity} onChange={selectQuantity}>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                            <option key={val} value={val}>{val}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="product-spacer"></div>

                                <div className="added-to-cart">
                                    <img src="/images/icons/checkmark.png" alt="added" loading="lazy" width="20" height="20" />
                                    Added
                                </div>

                                <button className="add-to-cart-button button-primary"
                                data-testid="add-to-cart-button"
                                onClick = {addToCart}>
                                    Add to Cart
                                </button>

                            </div>
    );
});