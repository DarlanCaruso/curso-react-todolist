import React from 'react';
import If from '../helpers/If';

export default props => (
  <If test={!props.hide}>
    <div className="control" onClick={props.onClick}>
      <a className={'button is-'+ props.color}>
        <span className="icon">
          <i className={'fas fa-'+ props.fa}></i>
        </span>
      </a>
    </div>
  </If>
);