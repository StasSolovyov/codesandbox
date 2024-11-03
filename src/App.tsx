import React from "react";
import { useCheckboxes } from "./hooks/useCheckboxes";
import Checkbox from "./components/Checkbox/Checkbox";
import SelectAllButton from "./components/SelectAllButton/SelectAllButton";

export default function App() {
  const { checkboxes, isAllSelected, changeValue, toggleAll } = useCheckboxes(3);

  return (
    <div className="App">
      <SelectAllButton isAllSelected={isAllSelected} onClick={toggleAll} />
      <p />
      {Object.entries(checkboxes).map(([key, value]) => (
        <Checkbox
          key={key}
          checked={value}
          name={key}
          onChange={(ev) => changeValue(key, ev.target.checked)}
        />
      ))}
    </div>
  );
}
