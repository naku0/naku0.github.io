import './box-component.css';

const BoxComponent = ({
                          type = 'default',
                          width = 1,
                          height = 1,
                          children,
                          className = '',
                          style = {},
                          onClick
                      }) => {

    const getBoxStyles = () => {
        return {
            gridColumn: `span ${width}`,
            gridRow: `span ${height}`,
            ...style
        };
    };

    const getBoxContent = () => {
        switch (type) {
            case 'default':
                return (
                    <div className={`default-content ${className}`}>
                        {children}
                    </div>
                )
            case 'info':
                return (
                    <div className={`info-content ${className}`}>
                        {children}
                    </div>
                )
            case 'task':
                return (
                    <div className={`tasks-content ${className}`}>
                        {children}
                    </div>
                )
            case 'o-list':
                return (
                    <div className={`o-list-content ${className}`}>
                        <ol>
                            {children}
                        </ol>
                    </div>
                )
            case 'u-list':
                return (
                    <div className={`u-list-content ${className}`}>
                        <ul>
                            {children}
                        </ul>
                    </div>
                )
            case 'img':
                return (
                    <div className={`img-content ${className}`}>
                        {children}
                    </div>
                )
            case 'text':
                return (
                    <div className={`text-content ${className}`}>
                        {children}
                    </div>
                )
            default:
                return (
                    <div className={`default-content ${className}`}>
                        {children}
                    </div>
                )
        }
    }

    return (
        <div
            className={`bento-box bento-${type} ${className}`}
            style={getBoxStyles()}
            onClick={onClick}
            data-width={width}
            data-height={height}
        >
            {getBoxContent()}
        </div>
    );
};

export default BoxComponent;