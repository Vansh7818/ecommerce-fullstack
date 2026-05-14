import './LoadingSkeleton.css';

export function LoadingSkeleton({ count = 8 }) {
    return (
        <div className="skeleton-grid">
            {Array(count).fill(0).map((_, i) => (
                <div key={i} className="skeleton-card">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-text skeleton-title"></div>
                    <div className="skeleton-text skeleton-rating"></div>
                    <div className="skeleton-text skeleton-price"></div>
                    <div className="skeleton-button"></div>
                </div>
            ))}
        </div>
    );
}
