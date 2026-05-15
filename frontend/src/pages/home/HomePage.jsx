import api from '../../utils/api';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { ProductsGrid } from './ProductsGrid';
import { LoadingSkeleton } from '../../components/LoadingSkeleton/LoadingSkeleton';
import './HomePage.css';

export function HomePage({ cart , loadCart }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getHomeData = async () => {
            try {
                setLoading(true);
                const response = await api.get('/api/products');
                setProducts(response.data.data || []);
            } catch (error) {
                console.error("Failed to load products:", error);
            } finally {
                setLoading(false);
            }
        };
        getHomeData();
    }, []);

    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart} />
            <div className="home-page">
                    {loading ? (
                        <LoadingSkeleton />
                    ) : (
                        <ProductsGrid products={products} loadCart={loadCart}/>
                    )}
                </div>
        </>
    );
}
