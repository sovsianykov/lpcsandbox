import React, {
  FunctionComponent,
  useCallback,
  useMemo,
} from "react";
import styles from "./ReportsNavigaton.module.scss";
import cn from "classnames";
import { IItem } from "./types";

export interface ItemProps {
  item: IItem;
  activeMenuItemId: string;
}

const ReportNavItem: FunctionComponent<ItemProps> = ({
  item,
  activeMenuItemId,
}) => {
  const callbackHandler = useCallback(() => {
    item.foo(item.id);
  }, [item]);

  const classNames = useMemo(
    () =>
      cn({
        [styles.reportItemContainer]: true,
        [styles.active]: item.id === activeMenuItemId,
      }),
    [activeMenuItemId, item.id]
  );

  return (
    <div className={classNames} onClick={callbackHandler}>
      {item.title}
    </div>
  );
};

export default ReportNavItem;
