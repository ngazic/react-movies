import { connect } from "react-redux";
import { Items } from "../../../store/types";
import React from "react";
import { RootState } from "../../../store";
import "./List.scss";
import { useHistory } from "react-router-dom";
import noImgPlacehoder from '../../../assets/no-image.png'

interface ListProps {
  show: string;
  items?: Items[];
  category?: string;
}
// const noImgPlacehoder = require('../../../assets/no-image.png')
const List: React.FC<ListProps> = (props) => {
  const history = useHistory();
  const singleView = (category: string, id: number) => {
    history.push("/single", { category, id });
  };
  return (<section className="row list">
    {
      props.items!.map((item: Items, index: number) => {
        return (<article onClick={() => singleView(props.category!, index)} className="col col-6 list__item-container" key={index}>
          <div className="list__item">
            <figure>
              <img src={item.poster_path
                ? process.env.REACT_APP_IMAGE_PATH + item.poster_path
                : noImgPlacehoder
              } alt="" />
            </figure>
            {
              item.title
                ? <h1 className="list__item-title">{item.title}</h1>
                : <h1 className="list__item-title">{item.name}</h1>
            }
          </div>
        </article>);
      })
    }
  </section>);
};

function mapStateToProps(state: RootState, ownProps: ListProps) {
  if (state.search.length > 0) {
    return { items: state.search, category: 'search' };
  } else if (ownProps.show === "movies") {
    return { items: state.movie, category: 'movie' };
  } else {
    return { items: state.tv, category: 'tv' };
  }
}

export default connect(mapStateToProps, null)(List);
