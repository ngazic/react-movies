import {connect} from "react-redux";
import {Items} from "../../../store/types";
import React from "react";
import {RootState} from "../../../store";
import "./List.scss";
import {useLocation, useHistory} from "react-router-dom";
interface ListProps {
  show: string;
  items?: Items[];
  category?: string;
}

const List: React.FC<ListProps> = (props) => {
  const location = useLocation();
  const history = useHistory();
  const singleView = (category : string, id : number) => {
    console.log("signle view function");
    console.log(category);
    console.log(id);
    history.push("/single", {category, id});
  };
  return (<div>
    <h1>List</h1>
    <ul className="list">
      {
        props.items !.map((item : Items, index : number) => {
          return (<li onClick={() => singleView(props.category!, index)} className="list__item">
            <img src={item.poster_path
                ? process.env.REACT_APP_IMAGE_PATH + item.poster_path
                : ""
} alt=""/>{" "}
            {
              item.title
                ? <h4>{item.title}</h4>
                : <h4>{item.name}</h4>
            }
          </li>);
        })
      }
    </ul>
  </div>);
};

function mapStateToProps(state : RootState, ownProps : ListProps) {
  if (state.search.length > 0) {
    return {items: state.search, category: 'search'};
  } else if (ownProps.show === "movies") {
    return {items: state.movie, category: 'movie'};
  } else {
    return {items: state.tv, category: 'tv'};
  }
}

export default connect(mapStateToProps, null)(List);
