import React, {FunctionComponent, useEffect, useState} from 'react';
import { IReportsItem } from "./types";
import ReportNavItem from "./ReportNavItem";

export interface ReportsNavigationProps {
    items : IReportsItem[];
}


const ReportsNavigation:FunctionComponent<ReportsNavigationProps> = ({items}) => {
    const [ itemsArray, setItemsArray] = useState<any>([])
    useEffect(()=>{setItemsArray(items)},[items])
    return (
        <div className="reportsNavigationContainer">
            {itemsArray.map((element: IReportsItem) => (
                <ReportNavItem key={element.id}
                               item ={element}

                />))}
        </div>
    );
};

export default ReportsNavigation;