import React, {FunctionComponent, useCallback} from "react";
import { IItem } from "../types";
import ReportNavItem from "./ReportNavItem";
import styles from "./ReportsNavigaton.module.scss";

export interface ReportsNavigationProps {
  items: IItem[];
  activeMenuItemId: string;
  onClick: any
}

const ReportsNavigation: FunctionComponent<ReportsNavigationProps> = ({
  items,
  activeMenuItemId,
    onClick
}) => {
  return (
    <>
      <div className={styles.menuTitle}>REPORTING</div>
      {items.map((item: IItem) => (
        <ReportNavItem
          activeMenuItemId={activeMenuItemId}
          key={item.id}
          item={item}
          onClick = {() => onClick(item.id)}
        />
      ))}
    </>
  );
};

export default ReportsNavigation;
