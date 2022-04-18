import React from "react";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";

export default observer(function NewCounter() {
  const { counter } = useStores();

  return (
    <div>
      <h1>{counter.number}</h1>
      <button onClick={counter.increase}>+1</button>
      <button onClick={counter.decrease}>-1</button>
    </div>
  );
});
