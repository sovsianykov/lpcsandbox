import React, {FunctionComponent, useCallback, useMemo} from 'react';
import cn from 'classnames';
import styles from './TabNavigation.module.scss'
import {ITabItem} from "../types";
export interface TabItemProps {
    item: ITabItem;
    activeTabItemId: string;
    onClick: any;
}

const TabItem:FunctionComponent<TabItemProps> = ({ item,activeTabItemId,onClick }) => {
    const classNames = useMemo(
        ()=>
            cn({
                [styles.tabItem] : true,
                [styles.active]: item.id === activeTabItemId
            }),
        [activeTabItemId, item.id]
    );


    
    return (
        <div className={classNames} onClick={onClick}>
            {item.title}
        </div>
    );
};

export default TabItem;