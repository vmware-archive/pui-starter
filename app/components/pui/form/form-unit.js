import React from 'react';
import types from 'prop-types';
import {TooltipTrigger} from 'pivotal-ui/react/tooltip';
import {Icon} from 'pivotal-ui/react/iconography';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import classnames from 'classnames';

export class FormUnit extends React.Component {
  static propTypes = {
    className: types.string,
    inline: types.bool,
    label: types.string,
    labelClassName: types.string,
    hideHelpRow: types.bool,
    hideLabelRow: types.bool,
    labelPosition: types.oneOf(['after']),
    optional: types.bool,
    optionalText: types.string,
    tooltip: types.node,
    tooltipSize: types.oneOf(['sm', 'md', 'lg']),
    tooltipPlacement: types.oneOf(['left', 'right', 'bottom', 'top']),
    field: types.node,
    help: types.node,
    hasError: types.bool
  };

  render() {
    const {
      className, hideHelpRow, hideLabelRow, inline, label, labelClassName, labelPosition, optional, optionalText, tooltip,
      tooltipSize = 'lg', tooltipPlacement = 'top', field, help, hasError
    } = this.props;

    if (!label && !field && !help) return null;

    const tooltipIcon = tooltip &&
      <TooltipTrigger {...{tooltip, className: 'tooltip-light', size: tooltipSize, placement: tooltipPlacement}}>
        <Icon verticalAlign="baseline" src="info_outline"/>
      </TooltipTrigger>;

    const labelRow = hideLabelRow || (
      <label {...{className: classnames('row-label', labelClassName), key: 'label-row', htmlFor: field && field.props.id}}>
        {label}
        {tooltipIcon}
        {label && optional && <span className="post-label type-neutral-4">{optionalText || '(Optional)'}</span>}
      </label>
    );

    const fieldRow = <div className="row-field" key="field-row">{field}</div>;
    const helpRow = hideHelpRow || <div className={classnames('row-help', {'type-dark-5': !hasError})}>{help}</div>;

    const sections = labelPosition === 'after' ? [fieldRow, labelRow] : [labelRow, fieldRow];

    return (
      <div className={classnames('form-unit', className, {'has-error': hasError})}>
        {inline ? (<Grid className="grid-inline grid-nogutter">
          {sections.map((col, key) =>
            <FlexCol {...{key, className: classnames({'col-fixed': key === 0})}}>{col}</FlexCol>)}
        </Grid>) : sections}
        {helpRow}
      </div>
    );
  }
}
