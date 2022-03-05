import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import { render } from "@testing-library/react";

import App from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});


it("mock testing using enzyme", async (done) => {
  const mockResponse = {
    name: "Paris",
    main: {
      temp: "210",
    },
    weather: [
      {
        id: 700,
        main: "Cloudy",
      },
    ],
  };
  const mockJsonPromise = Promise.resolve(mockResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  const wrapper = shallow(<App />);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  process.nextTick(() => {
    expect(wrapper).toMatchSnapshot();

    global.fetch.mockClear();
    done();
  });
});

