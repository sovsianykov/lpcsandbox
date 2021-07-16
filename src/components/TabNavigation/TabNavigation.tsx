import React, { FunctionComponent } from 'react';
import { ITabItem } from "../types";
import styles from './TabNavigation.module.scss'
import TabItem from "./TabItem";

export interface TabNavigationProps {
    items: ITabItem[];
    activeTabItemId: string;
    onClick: any;
}


const TabNavigation:FunctionComponent<TabNavigationProps> = ({items, activeTabItemId,onClick}) => {
    return (
        <div className={styles.tabNavigation}>
            {items.map((item: ITabItem) => (
                <TabItem
                    activeTabItemId={activeTabItemId}
                    key={item.id}
                    item={item}
                    onClick={() => onClick(item.id)}
                />
            ))}
        </div>
    );
};

export default TabNavigation;