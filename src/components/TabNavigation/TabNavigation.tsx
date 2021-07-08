import React, {FunctionComponent} from 'react';
import { ITabItem } from "../types";
import styles from './TabNavigation.module.scss'
import TabItem from "./TabItem";

interface TabNavigationProps {
    items: ITabItem[];
    activeTabItemId: string;
}


const TabNavigation:FunctionComponent<TabNavigationProps> = ({items,activeTabItemId}) => {
    return (
        <div className={styles.tabNavigation}>
            {items.map((item: ITabItem) => (
                <TabItem
                    activeTabItemId={activeTabItemId}
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
};

export default TabNavigation;