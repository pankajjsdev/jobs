import React from 'react';

interface SpacingProps {
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    pt?: string;
    pb?: string;
    pl?: string;
    pr?: string;
    className?: string;
}

const Spacing: React.FC<SpacingProps> = ({
    mt,
    mb,
    ml,
    mr,
    pt,
    pb,
    pl,
    pr,
    className = '',
}) => {
    return (
        <div
            className={`${mt ? `mt-${mt}` : ''} ${mb ? `mb-${mb}` : ''} ${ml ? `ml-${ml}` : ''} ${mr ? `mr-${mr}` : ''} ${pt ? `pt-${pt}` : ''} ${pb ? `pb-${pb}` : ''} ${pl ? `pl-${pl}` : ''} ${pr ? `pr-${pr}` : ''} ${className}`}
        />
    );
};

export default Spacing;
