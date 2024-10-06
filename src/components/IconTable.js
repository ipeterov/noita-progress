import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

import styles from "./IconTable.module.css";

export default function IconTable({ name, icons, columns, filter = "" }) {
  let totalCount = icons.length;
  if (name === "Enemies") {
    // To replicate the in-game behavior - 100.5% 186/185
    totalCount += 1;
  }

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.percent}>
          {name} - {Math.round((totalCount / icons.length) * 1000) / 10}%
        </span>{" "}
        <span className={styles.total}>
          {totalCount}/{icons.length}
        </span>
      </div>
      <div
        className={styles.table}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {icons.map((icon) => (
          <Icon
            key={icon.id}
            prefix={name}
            icon={icon}
            disabled={filter && !icon.name.toLowerCase().includes(filter)}
          />
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
