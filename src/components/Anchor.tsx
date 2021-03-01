import React from 'react';

interface AnchorProps extends HTMLAnchorElement {
    type: string;
    altText: string;
    alt: string;
    href: string;
    anchorText?: string;
    title: string;
}

const Anchor: any = ({ alt, href, anchorText }: AnchorProps) => {
    return (
        <a
            className="bottom-0 left-0 right-0 absolute rounded-lg bg-green-300 text-white hover:text-green-300 hover:bg-white transition-all duration-300 ease-linear"
            title={alt}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {anchorText}
        </a>
    );
}

export default Anchor;