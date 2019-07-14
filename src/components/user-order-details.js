import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

class OrderDetails extends Component {
  state = {
    selectedId: ""
  };
  toggleChange = id => {
    //console.log(id);
    this.setState({ selectedId: id });
  };
  render() {
    const { order } = this.props;
    return (
      <React.Fragment>
        {order.map((order, index) => (
          <div key={order.id}>
            <div
              className="order-title"
              onClick={() => this.toggleChange(order.id)}
            >
              <Row>
                <Col md="5">
                  <h3>{order.product.name}</h3>
                </Col>
                <Col md="5 align-middle">
                  <span className={order.product.orderStatus.toLowerCase()}>
                    {order.product.orderStatus}
                  </span>
                </Col>
                <Col md="2">
                  <h3>{order.price}</h3>
                </Col>
              </Row>
            </div>
            <div
              className={
                "order-body " +
                (this.state.selectedId === order.id ? "open" : "")
              }
              id={order.id}
            >
              <Row>
                <Col md="2">
                  <img src={order.product.picture} />
                </Col>
                <Col md="7">
                  <h4>{order.product.name}</h4>
                  <p>{order.product.description}</p>
                  <small>Ordered on: {order.product.orderDate}</small>
                </Col>
                <Col md="3">{order.price}</Col>
              </Row>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default OrderDetails;
