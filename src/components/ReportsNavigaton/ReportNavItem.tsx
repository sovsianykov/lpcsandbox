import React, {
  FunctionComponent,
  useCallback,
  useMemo,
} from "react";
import styles from "./ReportsNavigaton.module.scss";
import cn from "classnames";
import { IItem } from "../types";

export interface ItemProps {
  item: IItem;
  activeMenuItemId: string;
  onClick:any;
}

const ReportNavItem: FunctionComponent<ItemProps> = ({
  item,
  activeMenuItemId,
    onClick
}) => {


  const classNames = useMemo(
    () =>
      cn({
        [styles.reportItemContainer]: true,
        [styles.active]: item.id === activeMenuItemId,
      }),
    [activeMenuItemId, item.id]
  );

  return (
    <div className={classNames} onClick ={onClick}>
      {item.title}
    </div>
  );
};

export default ReportNavItem;
