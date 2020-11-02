import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

describe("src/components/Header/Navigation/Navigation.tsx", () => {
  const history = createMemoryHistory();
  const spy = jest.spyOn(history, "push");
  const renderWithRouter = (component: React.ReactElement) => {
    return {
      ...render(<Router history={history}>{component}</Router>)
    };
  };

  it("should match snapshot", () => {
    const { asFragment } = renderWithRouter(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render two navigation links", () => {
    const { getAllByRole } = renderWithRouter(<Navigation />);
    const links = getAllByRole("link");
    expect(links).toHaveLength(2);
  });

  it('clicking "movies" should redirect to "/movies"', () => {
    const { getByText } = renderWithRouter(<Navigation />);
    const moviesLink = getByText("Movies");
    userEvent.click(moviesLink);
    // expect(history.location.pathname).toBe("/hello");
    expect(spy).toBeCalledWith("/");
  });

  it('clicking "TV Shows" should redirect to "/shows"', () => {
    const { getByText } = renderWithRouter(<Navigation />);
    const moviesLink = getByText(/tv shows/i);
    userEvent.click(moviesLink);
    expect(spy).toBeCalledWith("shows");
    // screen.debug();
  });
});
