import React from "react";
import List from "./List";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { Items } from "../../../store/types";
import { RootState } from "../../../store";

describe('src/Components/Containers/List/List.tsx', () => {
  const mockStore = configureStore([thunk]);

  const movie: Items[] = [
    {
      id: 0,
      adult: false,
      name: 'Blockbuster 1',
      overview: 'some overview 1',
      poster_path: '/some/path.png'
    },
    {
      id: 1,
      adult: false,
      name: 'Blockbuster 2',
      overview: 'some overview 2',
      poster_path: '/some/path.png'
    },
  ];
  const tv: Items[] = [
    {
      id: 0,
      adult: false,
      title: 'one',
      overview: 'some overview 1',
      poster_path: '/some/path.png'
    },
    {
      id: 1,
      adult: false,
      title: 'two',
      overview: 'some overview 2',
      poster_path: '/some/path.png'
    },
  ];
  const search: Items[] = [
    {
      id: 0,
      adult: false,
      title: 'searched one',
      overview: 'some overview 1',
      poster_path: '/some/path.png'
    },
    {
      id: 1,
      adult: false,
      title: 'searched two',
      overview: 'some overview 2',
      poster_path: '/some/path.png'
    },
  ];
  const renderWithStore = (component: React.ReactElement,state:RootState) => {
    let store = mockStore(state );
    return {
      ...render(<Provider store={store}>{component}</Provider>), store
    };
  };

  // it('Should render "List" component', () => {
  // match snapshot
  // });

  it('Should render searched list if it is not empty', () => {
    const { getAllByRole, store } = renderWithStore(<List show='tv' />,{search, movie, tv});
    const state = store.getState() as RootState;
    expect(state.search.length).toBe(getAllByRole('heading').length);
  });

  it('Should render passed "movie" list if searched list is empty', () => {
    const { getAllByRole } = renderWithStore(<List show='movies' />,{search:[], tv, movie});
    const headlines = getAllByRole('heading');
    expect(headlines.length).toBe(movie.length)

  });
  it('Should render passed "tv" list if searched list is empty', () => {
    const { getAllByRole } = renderWithStore(<List show='tv' />,{search:[], tv, movie});
    const headlines = getAllByRole('heading');
    expect(headlines.length).toBe(tv.length)

  });

});