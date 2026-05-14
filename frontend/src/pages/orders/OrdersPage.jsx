import api from '../../utils/api';
import dayjs from 'dayjs';
import { useState, useEffect, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { formatMoney } from '../../utils/money';
import { LoadingSkeleton } from '../../components/LoadingSkeleton/LoadingSkeleton';
import './OrdersPage.css';

export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);

                const response = await api.get('/api/orders?expand=products');

                setOrders(response.data);
            } catch (error) {
                console.error('Failed to load orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <>
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                {loading ? (
                    <LoadingSkeleton count={3} />
                ) : orders.length === 0 ? (
                    <div
                        style={{
                            textAlign: 'center',
                            padding: '40px',
                            background: 'white',
                            borderRadius: '8px'
                        }}
                    >
                        <h3>No orders found.</h3>

                        <p>You haven't placed any orders yet.</p>

                        <a
                            href="/"
                            className="button-primary link-button"
                            style={{
                                display: 'inline-block',
                                marginTop: '15px',
                                textDecoration: 'none'
                            }}
                        >
                            Start Shopping
                        </a>
                    </div>
                ) : (
                    <div className="orders-grid">
                        {orders.map((order) => {
                            return (
                                <div key={order.id} className="order-container">
                                    <div className="order-header">
                                        <div className="order-header-left-section">
                                            <div className="order-date">
                                                <div className="order-header-label">
                                                    Order Placed:
                                                </div>

                                                <div>
                                                    {dayjs(order.orderTimeMs).format('MMMM D')}
                                                </div>
                                            </div>

                                            <div className="order-total">
                                                <div className="order-header-label">
                                                    Total:
                                                </div>

                                                <div>
                                                    {formatMoney(order.totalCostCents)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="order-header-right-section">
                                            <div className="order-header-label">
                                                Order ID:
                                            </div>

                                            <div>{order.id}</div>
                                        </div>
                                    </div>

                                    <div className="order-details-grid">
                                        {order.products.map((orderProduct) => {
                                            return (
                                                <Fragment key={orderProduct.product.id}>
                                                    <div className="product-image-container">
                                                        <img
                                                            src={orderProduct.product.image}
                                                            alt={orderProduct.product.name}
                                                        />
                                                    </div>

                                                    <div className="product-details">
                                                        <div className="product-name">
                                                            {orderProduct.product.name}
                                                        </div>

                                                        <div className="product-delivery-date">
                                                            Arriving on:{' '}
                                                            {dayjs(
                                                                orderProduct.estimatedDeliveryTimeMs
                                                            ).format('MMMM D')}
                                                        </div>

                                                        <div className="product-quantity">
                                                            Quantity: {orderProduct.quantity}
                                                        </div>

                                                        <button className="buy-again-button button-primary">
                                                            <img
                                                                className="buy-again-icon"
                                                                src="images/icons/buy-again.png"
                                                                alt="Buy Again"
                                                            />

                                                            <span className="buy-again-message">
                                                                Add to Cart
                                                            </span>
                                                        </button>
                                                    </div>

                                                </Fragment>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}