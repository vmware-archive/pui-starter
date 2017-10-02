import ReactDOMServer from 'react-dom/server';
import Layout from './components/layout';
import React from 'react';
import Application from './components/application';
import application from '../config/application.json';

export default function Index(props, done) {
  const envConfig = require(`../config/${process.env.NODE_ENV}.json`);
  const config = {...application, ...envConfig};
  const html = `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Layout {...{config}}><Application {...{config}}/></Layout>)}`;
  if (!done) return html;
  done(null, html);
}