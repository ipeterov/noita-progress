import React from 'react';
import PropTypes from 'prop-types';
import Icon from "./Icon";

import styles from './IconTable.module.css';

export default function IconTable({name, icons, columns}) {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.percent}>{name} - 100.0%</span>{' '}
        <span className={styles.total}>{icons.length}/{icons.length}</span>
      </div>
      <div className={styles.table} style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
        {icons.map((icon) => <Icon key={icon.name} icon={icon}/>)}
      </div>
    </div>

  );
}

IconTable.propTypes = {
  icons: PropTypes.array.isRequired,
  columns: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};