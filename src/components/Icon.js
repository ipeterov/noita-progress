import React from 'react';
import PropTypes from 'prop-types';

import styles from './Icon.module.css';

export default function Icon({icon}) {
  function loadImage(path) {
    return require(`../${path}`);
  }

  return (
    <img src={loadImage(icon.image_path)} alt={icon.name} className={styles.icon}/>
  );
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
};