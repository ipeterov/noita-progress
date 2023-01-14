import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'react-tooltip'

import styles from './Icon.module.css';

export default function Icon({icon}) {
  function loadImage(path) {
    return require(`../${path}`);
  }

  const handleClick = () => {
    if (!icon.wiki_url) {
      return;
    }

    window.open(icon.wiki_url, '_blank')
  }

  // The game has the same quirk - it's counted in the header, but not actually displayed
  if (icon.name === "turret_right") {
    return null;
  }

  return (
    <>
      <div className={styles.container} id={icon.id} onClick={handleClick}>
        {
          icon.background_path ?
            <img src={loadImage(icon.background_path)} alt={icon.name} className={styles.background}/>
            : null
        }
        <img src={loadImage(icon.image_path)} alt={icon.name} className={styles.icon}/>
      </div>
      <Tooltip anchorId={icon.id} className={styles.tooltip} classNameArrow={styles.tooltipArrow}>
        <div>
          <span className={styles.name}>{icon.name}</span>
          {icon.description ? (
            <>
              <br/>
              {icon.description}
            </>
          ) : null}
          {icon.wiki_url ? (
            <>
              <br/>
              <br/>
              Wiki page available, click the icon!
            </>
          ) : null}
        </div>
      </Tooltip>
    </>
  );
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
};