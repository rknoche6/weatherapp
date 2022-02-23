import React from 'react';
import ReactDOM from 'react-dom';
import Weather from '../weather.component';

import { render } from '@testing-library/react';
import "@testing-library/jest-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Weather />, div);
})

it("renders weather details correctly", () => {
    const {getByTestId} = render(<Weather location="Mumbai" temp="234" precip="Sunny"></Weather> );
    expect(getByTestId("location")).toHaveTextContent("Mumbai");
    expect(getByTestId("temp")).toHaveTextContent("234");
    expect(getByTestId("precip")).toHaveTextContent("Sunny");
})