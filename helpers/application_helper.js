import React from 'react';

const pepper = `${String.fromCharCode(55356)}${String.fromCharCode(57142)}`;

const helpers = {
  compact(array) {
    return array.filter(Boolean);
  },
  pepper,
  pepperOptions: [
    <option value="0"/>,
    <option value="1">{pepper}</option>,
    <option value="2">{pepper}{pepper}</option>,
    <option value="3">{pepper}{pepper}{pepper}</option>,
    <option value="4">{pepper}{pepper}{pepper}{pepper}</option>,
    <option value="5">{pepper}{pepper}{pepper}{pepper}{pepper}</option>
  ].map((e, key) => React.cloneElement(e, {key}))
};

module.exports = helpers;
