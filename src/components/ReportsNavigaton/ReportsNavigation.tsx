import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IReportsItem } from "./types";
import ReportNavItem from "./ReportNavItem";

export interface ReportsNavigationProps {
  items: IReportsItem[];
}

const ReportsNavigation: FunctionComponent<ReportsNavigationProps> = ({
  items,
}) => {
  const [itemsArray, setItemsArray] = useState<any>([]);
  const [activeId, setActiveID] = useState("");
  useEffect(() => {
    let itemsWithFlag = items.map((item) => {
      return { ...item, activeId: activeId };
    });
    setItemsArray(itemsWithFlag);
  }, [activeId, items]);
  const activeHandler = (id: string) => {
    setActiveID(id);
  };
  return (
    <div className="reportsNavigationContainer">
      {itemsArray.map((el: IReportsItem) => (
        <ReportNavItem
          onClick={() => activeHandler(el.id)}
          key={el.id}
          item={el}
        />
      ))}
    </div>
  );
};

export default ReportsNavigation;
