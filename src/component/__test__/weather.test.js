import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Weather from "../weather.component";
import { faSun, faCloudRain } from "@fortawesome/free-solid-svg-icons";

import "@testing-library/jest-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Weather />, div);
});

it("renders weather details correctly", () => {
  const weather = shallow(
    <Weather
      location="Mumbai"
      temp="234"
      precip="Sunny"
      loading={false}
      icon={faSun}
    ></Weather>
  );
  expect(weather).toMatchSnapshot();
});

it("renders weather details correctly 2", () => {
  const weather = shallow(
    <Weather
      location="Delhi"
      temp="164"
      loading={false}
      precip="Rain"
      icon={faCloudRain}
    ></Weather>
  );
  expect(weather).toMatchSnapshot();
});

it("renders if no props are passed", () => {
  const weather = shallow(<Weather />);
  expect(weather).toMatchSnapshot();
});