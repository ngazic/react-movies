import { Items } from "../../../store/types";
import React from "react";
import "./Single.scss";
import { useLocation, useHistory } from "react-router-dom";
import { useStore } from "react-redux";
import noImgPlacehoder from '../../../assets/no-image.png'

interface ListProps {
  show?: string;
  items?: Items[];
}

const Single: React.FC<ListProps> = (props) => {
  const location = useLocation<{
    category: string;
    id: number;
  }>();
  const store = useStore();
  const item: Items = store.getState()[location.state.category][location.state.id];
  const history = useHistory();
  const goBack = () => {
    history.goBack()
  }
  return (<div className="row single">
    <section className="col">
      <div onClick={goBack} aria-label="link" className="single__link">Back</div>
    <figure>
      <img src={item.poster_path
        ? process.env.REACT_APP_IMAGE_PATH + item.poster_path
        : noImgPlacehoder
      } alt="" />
    </figure>
    <h1 className="single__title">{
      item.title
        ? item.title
        : item.name
    }</h1>
    <p>{item.overview}</p>
    </section>
  </div >);
};

export default Single;
