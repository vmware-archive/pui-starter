import React from 'react';
import classnames from 'classnames';
import {FormUnit} from './form_unit';

export class Form extends React.Component {
  componentDidMount() {
    require('pivotal-ui/css/flex-grids');
    require('pivotal-ui/css/vertical-alignment');
  }

  render() {
    const {className, style, rows} = this.props;
    return (
      <div {...{className: classnames('form', className), style}}>
        {rows.map((cols, key) => (
          <div {...{className: 'grid', key}}>
            {cols.map(({fixed, ...formUnit}, key) => (
              <div {...{
                className: classnames('col', 'aligner', {'col-fixed': fixed}),
                style: {height: 'initial'},
                key
              }}>
                <FormUnit {...{
                  ...formUnit,
                  className: classnames(formUnit.className, 'aligner-item', 'aligner-item-bottom')
                }}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}