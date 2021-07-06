import React, { FunctionComponent, useCallback, useState } from "react";
import "./ReportsNavigaton.scss";
import classNames from "classnames";
import { IReportsItem } from "./types";
export interface ItemProps {
  item: IReportsItem;
  onClick(): void;
}

const ReportNavItem: FunctionComponent<ItemProps> = ({ item, onClick }) => {

  const callbackHandler = useCallback(() => {
    item.onClick(item.id);
  },[item])

  const navClass = classNames("reportItemContainer", {
    active: item.id === item.activeId,
  });

  return (
    <div className={navClass} onClick={onClick}>
      <div
        onClick={callbackHandler}
        className="foo"
      >
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default ReportNavItem;
