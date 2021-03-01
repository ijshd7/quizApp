import React from 'react';

const Anchor = ({ alt, href, anchorText }) => {
    return (
        <a
            className="bottom-0 left-0 right-0 absolute rounded-lg bg-green-300 text-white hover:text-green-300 hover:bg-white transition-all duration-300 ease-linear"
            alt={alt}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {anchorText}
        </a>
    );
}

export default Anchor;