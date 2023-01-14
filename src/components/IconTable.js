import React from 'react';
import PropTypes from 'prop-types';
import Icon from "./Icon";

import styles from './IconTable.module.css';

export default function IconTable({icons, columns}) {
  return (
    <div className={styles.table} style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
      {icons.map((icon) => <Icon key={icon.name} icon={icon}/>)}
    </div>
  );
}

IconTable.propTypes = {
  icons: PropTypes.array.isRequired,
  columns: PropTypes.number.isRequired,
};