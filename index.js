
// class Order extends React.Component {
//   render() {
//     return (
//       <div className="order">
//         <ul>
//           <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
//           <li>{this.props.size}</li>
//           <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
//           <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
//         </ul>
//       </div>
//     );
//   }
// }

// Order.defaultProps = {
//   cone: true,
//   size: 'regular'
// };

// Order.propTypes = {
//   cone: React.PropTypes.bool,
//   size: React.PropTypes.string,
//   scoops:
//   React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
//   orderInfo: React.PropTypes.shape({
//     customerName: React.PropTypes.string.isRequired,
//     orderedAt: React.PropTypes.number.isRequired // We're using UNIX timestamps here
//   }).isRequired
// };
