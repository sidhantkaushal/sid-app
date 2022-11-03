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
  render() {
    const { _id, desc, url, prodName } = this.props.values;

    this.state = {
      btnText: "Buy" + _id,
    };
    return (
      <div class="card">
        <img class="card-img-top" src={url} alt="Card cap" />
        <div class="card-body">
          <h5 class="card-title">{prodName}</h5>
          <p class="card-text">{desc}</p>
          <button class="btn btn-primary"> {this.state.btnText}</button>
        </div>
      </div>
    );
  }
}

export default Card;
