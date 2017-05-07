import React, {Component} from 'react';

//Stateless way
function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

// class Square extends Component {
//
//
//   render(props) {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }
//
 export default Square;
