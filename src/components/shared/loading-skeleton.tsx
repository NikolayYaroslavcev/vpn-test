import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingSkeleton: React.FC = () => (
    <ContentLoader
        speed={1}
        width="100%"
        height={150}
        viewBox="0 0 100 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        preserveAspectRatio="none"
    >
        <rect x="0" y="0" rx="4" ry="4" width="100" height="40" /> {/* Увеличили высоту в 2 раза */}
        <rect x="0" y="50" rx="4" ry="4" width="100" height="40" /> {/* Увеличили высоту в 2 раза */}
        <rect x="0" y="100" rx="4" ry="4" width="100" height="40" /> {/* Увеличили высоту в 2 раза */}
    </ContentLoader>
);

export default LoadingSkeleton;
