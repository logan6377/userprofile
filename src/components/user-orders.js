import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import OrderDetails from "./user-order-details";
import PagenationOrder from "./pagenation";

class Orders extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { order: this.props, pageStart: 0, pageEnd: 5 };
  }
  onPageChange = id => {
    console.log(id);
  };
  render() {
    const { order } = this.props;

    return (
      <div className="user-order">
        <h1>Past orders</h1>
        <hr />
        <Row>
          <Container className="order-container">
            <div className="order-list">
              <OrderDetails order={order} />
            </div>
          </Container>
        </Row>
        {/* <PagenationOrder
          count={this.state.pageEnd}
          onClick={this.onPageChange}
        /> */}
      </div>
    );
  }
}

export default Orders;
