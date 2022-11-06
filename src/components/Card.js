// import React from "react";

// // https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png

// // eslint-disable-next-line no-unused-vars
// const Card = (props) => {
//   console.log(props);
//   //Props destructing
//   const { _id, desc, prodName, url } = props.values;
//   return (
//     <div class="card">
//       <img class="card-img-top" src={url} alt="Card cap" />
//       <div class="card-body">
//         <h5 class="card-title">{props.values.prodName}</h5>
//         <p class="card-text">{props.values.desc}</p>
//         <button class="btn btn-primary"> {_id}</button>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
      inCart: 0,
    };
  }
  render() {
    const { _id, desc, url, prodName } = this.props.values;
    const handleClick = () => {
      // Syntax 1
      this.setState({
        ...this.state,
        showImage: true,
      });
      // console.log("hit");
    };
    const handelAdd = () => {
      this.setState((state) => {
        // syntax 2
        return {
          ...state,
          inCart: state.inCart + 1,
        };
      });
    };
    // if (this.state.showImage) return <h1>Hello</h1>;
    return (
      <div class="card">
        {this.state.showImage ? (
          <img class="card-img-top img-flex" src={url} alt="Card cap" />
        ) : (
          <h3>Not showing image as of now</h3>
        )}
        <div class="card-body">
          <h5 class="card-title">{prodName}</h5>
          <p class="card-text">{desc}</p>
          <button class="btn btn-primary" onClick={handleClick}>
            Press to show image
          </button>
          <br />
          <button onClick={handelAdd} className="btn btn-info mt-2">
            {this.state.inCart === 0
              ? "ADD to cart"
              : `${this.state.inCart} added, press to add more`}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
