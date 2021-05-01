import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from '../index';

describe('@budlocks/comps/<Counter />', () => {
  it("properly increments and decrements the counter", () => {
    render(<Counter />);
    const counter = screen.getByText("0");
    const incrementButton = screen.getByText("+")
    const decrementButton = screen.getByText("-")
    
    fireEvent.click(incrementButton)
    expect(counter.textContent).toEqual("1")

    fireEvent.click(decrementButton)
    expect(counter.textContent).toEqual("0")
  });
});