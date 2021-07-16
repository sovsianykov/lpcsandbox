import React from "react";
import {getByLabelText, getByText, render} from '@testing-library/react';

import RepHeader from "../RepHeader";



describe("<RepHeader />", () => {
  it("The content obtained from props must be in the document",() => {
    //Arrange
    const testHeader = {title : "Test Title", numberOfAccounts: 5, date: new Date(2021,0,3)};
    const { container } = render(
        <RepHeader header={testHeader} />
    )
    // const titleElement = screen.getByText("Test Title");
    // const dateElement = screen.getByText("As of January 3, 2021");
    
    //Assert
    expect(getByText(container,"Test Title")).toBeInTheDocument();
    expect(getByText(container,"As of January 3, 2021")).toBeInTheDocument();
  })
})




// test("<RepHeader>", () => {
//   render(<RepHeader header = {testHeader}/>);
//   const RepHeaderElement = screen.getByTestId("testId2");
//   expect(RepHeaderElement).toBeInTheDocument();
//   expect(RepHeaderElement).toHaveTextContent("Test Title");
//   expect(RepHeaderElement).toHaveTextContent("As of January 3, 2021");
//
//
// })