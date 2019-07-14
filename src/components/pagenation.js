import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PagenationOrder extends Component {
  state = {};
  tablecontent = (count, onPageChange) => {
    let tableBody = [];
    for (let i = 0; i < count; i++) {
      tableBody.push(
        <PaginationItem>
          <PaginationLink href="#" onClick={() => onPageChange(i + 1)}>
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return tableBody;
  };

  render() {
    const { count, onPageChange } = this.props;

    return (
      <Pagination aria-label="Page navigation example">
        {this.tablecontent(count, onPageChange)}
      </Pagination>
    );
  }
}

export default PagenationOrder;
