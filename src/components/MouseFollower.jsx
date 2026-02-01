import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => setHidden(false);
        const onMouseLeave = () => setHidden(true);

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div
            className={`mouse-follower ${hidden ? 'hidden' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export default MouseFollower;
