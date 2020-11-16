import {Items} from "../../../store/types";
import React from "react";
import "./Single.scss";
import {useLocation, useHistory} from "react-router-dom";
import {useStore} from "react-redux";
interface ListProps {
  show?: string;
  items?: Items[];
}

const Single: React.FC<ListProps> = (props) => {
  const location = useLocation < {
    category: string;
    id: number;
  } > ();
  const itemData = {
    category: location.state.category as string,
    id: location.state.id as number
  };
  console.log("single view");
  console.log(location.state);
  const store = useStore();
  console.log(store.getState());
  const item: Items = store.getState()[location.state.category][location.state.id];
  console.log(item);
  const history = useHistory();
const goBack = () => {
  history.goBack()
} 
  return (<div>
    <h1>Single</h1>
    <h5 onClick={goBack}>Go back</h5>
    <section className="single">
      <h1>{
          item.title
            ? item.title
            : item.name
        }</h1>
      <img src={item.poster_path
          ? process.env.REACT_APP_IMAGE_PATH + item.poster_path
          : ""
} alt=""/>
      <p>{item.overview}</p>
    </section>
  </div>);
};

export default Single;
