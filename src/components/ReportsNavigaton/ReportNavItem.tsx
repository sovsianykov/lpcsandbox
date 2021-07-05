import React,{ FunctionComponent } from 'react';
import { IReportsItem } from "./types";

export interface ItemProps {
   item : IReportsItem
}


const ReportNavItem:FunctionComponent<ItemProps> = ({item}) => {
    return (
        <div className='reportItemContainer'>
           <div className="reportItem">
               <h3>{item.title}</h3>
           </div>
        </div>
    );
};

export default ReportNavItem;