import React from 'react';
import If from '../helpers/If';

export default props => (
  <If test={!props.hide}>
    <div className="control" onClick={props.onClick}>
      <a className="button is-info">
        <span className="icon">
          <i className="fas fa-plus"></i>
        </span>
      </a>
    </div>
  </If>
);