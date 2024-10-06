import { useState } from "react";
import data from "../icons.json";

import Hamis from "../img/longleg.png";
import styles from "./App.module.css";
import IconTable from "./IconTable";

export default function App() {
  const [filter, setFilter] = useState("");
  return (
    <div className={styles.container}>
      <input value={filter} onInput={(e) => setFilter(e.target.value)} />
      <div className={styles.tables}>
        <IconTable
          name="Perks"
          icons={data.perks}
          filter={filter}
          columns={9}
        />
        <IconTable
          name="Spells"
          icons={data.spells}
          filter={filter}
          columns={12}
        />
        <IconTable
          name="Enemies"
          icons={data.enemies}
          filter={filter}
          columns={9}
        />
      </div>
      <img src={Hamis} alt="Hämis" className={styles.hamis} />
    </div>
  );
}
