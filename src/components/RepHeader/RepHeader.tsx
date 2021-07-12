import React, { FunctionComponent  } from "react";
import { format } from 'date-fns'
import { IRepHeader } from "../types";
import styles from "./RepHeader.module.scss";
import { StringUtils } from "../../utils/StringUtils";


export interface RepHeaderProps {
  header: IRepHeader;
}

const RepHeader: FunctionComponent<RepHeaderProps> = ({ header }) => {


  const subtitle = `${header.numberOfAccounts} investor ${StringUtils.helperPluralize(header.numberOfAccounts,'account')} selected`;
  console.log(subtitle)

  const displayDate = format(header.date, "'As of' MMMM d, yyyy");
  return (
    <div className = {styles.header} data-testid = "testId2">
      <div className = {styles.title}>{header.title}</div>
      <div className = {styles.subtitle}>
        {`${subtitle}`}
      </div>
      <div className = {styles.date} >{displayDate}</div>
    </div>
  );
};

export default RepHeader;
