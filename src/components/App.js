import { useState, useMemo, useEffect } from "react";
import data from "../icons.json";

import Hamis from "../img/longleg.png";
import styles from "./App.module.css";
import IconTable from "./IconTable";

const MATCH_LETTER = /^[a-zA-Z]$/;

function mapFilter(text) {
  return (item) =>
    item.name.toLowerCase().includes(text) ? item : { ...item, disabled: true };
}

export default function App() {
  const [filter, setFilter] = useState("");

  const perks = useMemo(() => data.perks.map(mapFilter(filter)), [filter]);
  const spells = useMemo(() => data.spells.map(mapFilter(filter)), [filter]);
  const enemies = useMemo(() => data.enemies.map(mapFilter(filter)), [filter]);

  useEffect(() => {
    const handler = function (e) {
      if (!MATCH_LETTER.test(e.key)) return;
      var input = document.getElementById("filter");
      if (document.activeElement !== input) {
        input.focus({ preventScroll: true });
      }
    };
    document.addEventListener("keydown", handler);
    // Mainly for development, since hot-relod will rerun this useEffect
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <input
          placeholder="Search"
          id="filter"
          value={filter}
          onInput={(e) => setFilter(e.target.value.toLowerCase())}
        />
        <div className={styles.tables}>
          <IconTable name="Perks" icons={perks} columns={9} />
          <IconTable name="Spells" icons={spells} columns={12} />
          <IconTable name="Enemies" icons={enemies} columns={9} />
        </div>
      </div>
      <img src={Hamis} alt="Hämis" className={styles.hamis} />
    </div>
  );
}
