import React, { FunctionComponent, useCallback, useState } from "react";
import "./ReportsNavigaton.scss";
import { IReportsItem } from "./types";
export interface ItemProps {
  item: IReportsItem;
  onClick(): void;
};

const ReportNavItem: FunctionComponent<ItemProps> = ({ item, onClick }) => {
  let activeClass = "reportItemContainer";
  if (item.id === item.activeId) {
    activeClass = "active";
  }
  return (
    <div className={activeClass} onClick={onClick}>
      <div>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default ReportNavItem;
