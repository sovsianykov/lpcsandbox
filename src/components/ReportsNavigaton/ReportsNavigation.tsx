import React, { FunctionComponent } from "react";
import { IItem } from "../types";
import ReportNavItem from "./ReportNavItem";
import styles from "./ReportsNavigaton.module.scss";

export interface ReportsNavigationProps {
  items: IItem[];
  activeMenuItemId: string;
}

const ReportsNavigation: FunctionComponent<ReportsNavigationProps> = ({
  items,
  activeMenuItemId,
}) => {
  return (
    <>
      <div className={styles.menuTitle}>REPORTING</div>
      {items.map((item: IItem) => (
        <ReportNavItem
          activeMenuItemId={activeMenuItemId}
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
};

export default ReportsNavigation;
