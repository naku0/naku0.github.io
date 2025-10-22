import './bento-grid.css';

const BentoGrid = ({
                       children,
                       columns = 4,
                       rows = 4,
                       gap = 20,
                       className = ''
                   }) => {
    return (
        <div
            className={`bento-grid ${className}`}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gap: `${gap}px`
            }}
        >
            {children}
        </div>
    );
};

export default BentoGrid;