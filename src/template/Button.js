import React from 'react';
import If from '../helpers/If';

export default props => (
  <If test={!props.hide}>
    <div className="control" onClick={props.onClick}>
      <a className={props.color}>
        <span className="icon">
          <i className={props.fa}></i>
        </span>
      </a>
    </div>
  </If>
);