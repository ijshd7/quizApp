import React from 'react';
import Anchor from './Anchor';

const Layout: any = ({ children }: any) => {
    return (
        <main className="w-full h-screen overflow-hidden text-center bg-green-100">
            {children}
            <Anchor
                alt="Link to source code"
                href="https://github.com/ijshd7/quizApp"
                anchorText="Source"
            />
        </main>
    );
}

export default Layout;