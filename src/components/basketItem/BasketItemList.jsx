import { observer } from "mobx-react";
import React from "react";
import useStores from "../../hooks/useStores";
import BasketItem from "./BasketItem";

const BasketItemList = () => {
  const { market } = useStores();

  const itemList = market.selectedItems.map((item) => {
    return (
      <BasketItem
        name={item.name}
        price={item.price}
        count={item.count}
        key={item.name}
        onTake={market.take}
      />
    );
  });

  return (
    <div>
      {itemList}
      <hr />
      <p>
        <b>총합: </b> {market.total}원
      </p>
    </div>
  );
};

export default observer(BasketItemList);
