import React from "react";
import { render, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TabNavigation from "../TabNavigation";

describe("<TabNavigation/>", () =>{
    it("Shout call onClick pron on click", ()=>{
        //Arrange
        const onClickMock = jest.fn()
        const mockItems = [{ id : '1', title : "Your Interests" , foo : onClickMock }];
        const activeId = "1"
        const { container } = render (
            <TabNavigation items={mockItems} activeTabItemId={activeId} onClick={onClickMock}/>
        );

        //Act
        userEvent.click(getByText(container, mockItems[0].title))

        //Assert
        expect(onClickMock).toHaveBeenCalledTimes(1)
        expect(getByText(container, mockItems[0].title)).toHaveClass('active')
    });
});
