import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

describe("src/components/Header/Navigation/Navigation.tsx", () => {
  const history = createMemoryHistory();
  const spy = jest.spyOn(history, "push");
  const clickProp = jest.fn()
  const renderWithRouter = (component: React.ReactElement) => {
    return {
      ...render(<Router history={history}>{component}</Router>)
    };
  };

  it("should match snapshot", () => {
    const { asFragment } = renderWithRouter(<Navigation click={clickProp} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render two navigation links", () => {
    const { getAllByRole } = renderWithRouter(<Navigation click={clickProp} />);
    const links = getAllByRole("link");
    expect(links).toHaveLength(2);
  });

  it('clicking "movies" should redirect to "/movie"', () => {
    const { getByText } = renderWithRouter(<Navigation click={clickProp} />);
    const moviesLink = getByText("Movies");
    userEvent.click(moviesLink);
    expect(spy).toBeCalledWith("/movie");
  });

  it('clicking "TV Shows" should redirect to "/shows"', () => {
    const { getByText } = renderWithRouter(<Navigation click={clickProp} />);
    const showsLink = getByText(/tv shows/i);
    userEvent.click(showsLink);
    expect(spy).toBeCalledWith("/tv");
  });
  it('clicking link should call passed function', () => {
    const { getByText } = renderWithRouter(<Navigation click={clickProp} />);
    const showsLink = getByText(/tv shows/i);
    userEvent.click(showsLink);
    expect(clickProp).toHaveBeenCalledTimes(1);
  });
});
