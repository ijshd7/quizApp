import React from 'react';
import './src/styles/global.css';
import { MyProvider } from './src/hooks/Provider';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
    return <MyProvider>{element}</MyProvider>
}