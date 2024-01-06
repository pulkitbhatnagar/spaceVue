import React from 'react';

const BackGroundImage = () => {
    return (
        <div>
            <img
                src="space-3262811_1280.jpg"
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100vw',
                    zIndex: -1,
                }}
                alt="roclet image"
            ></img>
        </div>
    );
};

export default BackGroundImage;
