import { observer } from "mobx-react";
import React from "react";
import useStores from "../../hooks/useStores";
import ShopItem from "./ShopItem";

const items = [
  {
    name: "생수",
    price: 850,
  },
  {
    name: "신라면",
    price: 900,
  },
  {
    name: "포카칩",
    price: 1500,
  },
  {
    name: "새우깡",
    price: 1000,
  },
];

const ShopItemList = () => {
  const { market } = useStores();

  const itemList = items.map((item) => (
    <ShopItem {...item} key={item.name} onPut={market.put} />
  ));
  return <div>{itemList}</div>;
};

export default observer(ShopItemList);
