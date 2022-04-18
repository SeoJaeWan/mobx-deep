import React from "react";
import SuperMarketTemplate from "./SuperMarketTemplate";
import ShopItemList from "./shopItem/ShopItemList";
import BasketItemList from "./basketItem/BasketItemList";

export default function SuperMarket() {
  return (
    <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
  );
}
