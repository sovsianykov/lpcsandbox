import React, {
  FunctionComponent,
} from "react";
import { IItem } from "./types";
import ReportNavItem from "./ReportNavItem";


export interface ReportsNavigationProps {
  items: IItem[];
  activeMenuItemId: string;

}

const ReportsNavigation: FunctionComponent<ReportsNavigationProps> = ({
  items,activeMenuItemId
}) => {

  return (
    <div className="reportsNavigationContainer">
      <div className="menuTitle">
        REPORTING
      </div>
      {items.map((item: IItem) => (
        <ReportNavItem
          activeMenuItemId={ activeMenuItemId }
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ReportsNavigation;
