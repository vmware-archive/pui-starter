import React from 'react';
import PropTypes from 'prop-types';

export default function Layout({config, children}) {
  const configJs = `window.${config.globalNamespace} = {animation: true, config: ${JSON.stringify(config)}}`;
  const metas = Layout.metas.map((props, key) => <meta {...props} {...{key}}/>);
  return (
    <html>
    <head>
      <title>Pivotal UI Starter</title>
      {metas}
    </head>
    <body>
    <div id="root">{children}</div>
    <script dangerouslySetInnerHTML={{__html: configJs}}/>
    </body>
    </html>
  );
}

Layout.propTypes = {
  config: PropTypes.object.isRequired
};

Layout.metas = [
  {charSet: 'utf-8'},
  {httpEquiv: 'x-ua-compatible', content: 'ie=edge'},
  {name: 'description', content: ''},
  {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'}
];
