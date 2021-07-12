import React from "react";
import {render, screen} from  '@testing-library/react';

import RepHeader from "../RepHeader";

const testHeader = {title : "Test Title", numberOfAccounts: 5, date: new Date(2021,0,3) }

test("<RepHeader>", () => {
  render(<RepHeader header = {testHeader}/>);
  const RepHeaderElement = screen.getByTestId("testId2");
  expect(RepHeaderElement).toBeInTheDocument();
  expect(RepHeaderElement).toHaveTextContent("Test Title");
  expect(RepHeaderElement).toHaveTextContent("As of January 3, 2021");

  
})