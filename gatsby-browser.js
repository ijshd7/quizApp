import React from 'react';
import './src/styles/global.css';
import Provider from './src/hooks/Provider';
import Layout from './src/components/Layout';

export const wrapRootElement = Provider;

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}