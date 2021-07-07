import React from "react";
import { render, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ReportsNavigation from "../ReportsNavigation";

describe("<ReportsNavigation/>", () =>{
    it("Shout call onClick pron on click", ()=>{
        //Arrange
        const onClickMock = jest.fn()
        const mockItems = [{ id : '1', title : "Capital Account Management" , foo : onClickMock }];
        const activeId = "1"
        const { container } = render (
            <ReportsNavigation items={mockItems} activeMenuItemId={activeId}/>
        );
        //Act
        userEvent.click(getByText(container, mockItems[0].title))

        //Assert
        expect(onClickMock).toHaveBeenCalledTimes(1)
    });
});

