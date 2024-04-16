import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

import styles from "./IconTable.module.css";

export default function IconTable({ name, icons, columns }) {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.percent}>
          {name} -{" "}
          {Math.round(
            ((name === "Enemies" ? icons.length + 1 : icons.length) /
              icons.length) *
              1000
          ) / 10}
          %
        </span>{" "}
        <span className={styles.total}>
          {name === "Enemies" ? icons.length + 1 : icons.length}/{icons.length}
        </span>
      </div>
      <div
        className={styles.table}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {icons.map((icon) => (
          <Icon key={icon.id} prefix={name} icon={icon} />
        ))}
      </div>
    </div>
  );
}

IconTable.propTypes = {
  icons: PropTypes.array.isRequired,
  columns: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
