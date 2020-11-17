import { Items } from "../../../store/types";
import React from "react";
import "./Single.scss";
import { useLocation, useHistory } from "react-router-dom";
import { useStore } from "react-redux";
import noImgPlacehoder from '../../../assets/no-image.png'
import API from '../../../API-helper'

interface ListProps {
  show?: string;
  items?: Items[];
}

const Single: React.FC<ListProps> = (props) => {
  const store = useStore();
  const history = useHistory();
  const location = useLocation<{
    category: string;
    id: number;
  }>();

  const item: Items = location.state ? store.getState()[location.state.category][location.state.id] : undefined;

  const goBack = () => {
    history.goBack()
  }
  if (!item) {
    goBack()
  }

  return (<div className="row single">
    <section className="col">
      <div onClick={goBack} aria-label="link" className="single__link">Back</div>
      <div className="image-wrapper">
        <figure>
          <img src={item.poster_path
            ? API.apiImgPath + item.poster_path
            : noImgPlacehoder
          } alt="" />
        </figure>
      </div>
      <h1 className="title single__title">{
        item.title
          ? item.title
          : item.name
      }</h1>
      <p>{item.overview}</p>
    </section>
  </div >);
};

export default Single;
