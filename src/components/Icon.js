import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";

import styles from "./Icon.module.css";

function loadImage(path) {
  return require(`../${path}`);
}

export default function Icon({ prefix, icon, disabled = false }) {
  // The game has the same quirk - it's counted in the header, but not actually displayed
  if (icon.id === "turret_right") {
    return null;
  }

  const handleClick = () => {
    if (!icon.wiki_url) {
      return;
    }

    window.open(icon.wiki_url, "_blank");
  };

  const id = `${prefix}-${icon.id}`;

  return (
    <>
      <div
        className={styles.container}
        aria-disabled={disabled}
        id={id}
        onClick={handleClick}
      >
        {icon.background_path ? (
          <img
            src={loadImage(icon.background_path)}
            alt={icon.name}
            className={styles.background}
          />
        ) : null}
        <img
          src={loadImage(icon.image_path)}
          alt={icon.name}
          className={styles.icon}
        />
      </div>
      {!disabled && (
        <Tooltip
          place="bottom"
          offset={29}
          anchorId={id}
          className={styles.tooltip}
          classNameArrow={styles.tooltipArrow}
        >
          <div>
            <div className={styles.name}>{icon.name || icon.id}</div>
            {icon.description ? (
              <div className={styles.description}>{icon.description}</div>
            ) : null}
            {icon.wiki_url ? (
              <div className={styles.wiki}>
                Wiki page available, click the icon!
              </div>
            ) : null}
          </div>
        </Tooltip>
      )}
    </>
  );
}

Icon.propTypes = {
  prefix: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
