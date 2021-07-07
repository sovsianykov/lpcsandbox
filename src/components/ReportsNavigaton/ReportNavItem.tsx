import React, { FunctionComponent, useCallback, useState } from "react";
import "./ReportsNavigaton.scss";
import classNames from "classnames";
import { IItem } from "./types";

export interface ItemProps {
  item: IItem;
  activeMenuItemId: string;
}

const ReportNavItem: FunctionComponent<ItemProps> = ({ item,activeMenuItemId}) => {

  const callbackHandler = useCallback(() => {
    item.foo(item.id);
  },[item])

  const navClass = classNames("reportItemContainer", {
    active: item.id === activeMenuItemId
  });

  return (
    <div className={navClass} onClick={callbackHandler} >
        {item.title}
    </div>
  );
};

export default ReportNavItem;
