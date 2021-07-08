import React, {FunctionComponent, useCallback, useMemo} from 'react';
import cn from 'classnames';
import styles from './TabNavigation.module.scss'
import {ITabItem} from "../types";
export interface TabItemProps {
    item: ITabItem;
    activeTabItemId: string;
}

const TabItem:FunctionComponent<TabItemProps> = ({ item,activeTabItemId }) => {
    const classNames = useMemo(
        ()=>
            cn({
                [styles.tabItem] : true,
                [styles.active]: item.id === activeTabItemId
            }),
        [activeTabItemId, item.id]
    );

    const callbackHandler = useCallback(() => {
        item.foo(item.id);
    }, [item]);
    
    return (
        <div className={classNames} onClick={callbackHandler}>
            {item.title}
        </div>
    );
};

export default TabItem;