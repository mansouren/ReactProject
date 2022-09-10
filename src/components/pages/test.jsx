import React, { Component } from "react";
import GridView from "../common/GridView";
import orders from "../../data/data";
import { Form } from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";
import DataSource from "devextreme/data/data_source";
import SelectBox from "devextreme-react/select-box";

const fromUngroupedData = new DataSource({
  store: {
    type: "array",
    data: orders.getOrders(),
    key: "ID",
  },
});
class Test extends Component {
  state = {
    orders: orders.getOrders(),
  };

  handleUpdate(e) {
    console.log(e);
  }

  form = () => {
    return (
      <Form>
        <Item dataField="OrderNumber" />
        <Item dataField="OrderDate" />
        <Item dataField="SaleAmount" />
        <Item dataField="Terms" />
        <Item dataField="CustomerStoreState" />
        <Item caption="test" dataField="test">
          <SelectBox
            dataSource={fromUngroupedData}
            valueExpr="ID"
            displayExpr="Employee"
          />
        </Item>
      </Form>
    );
  };

  render() {
    console.log({ fromUngroupedData });
    return (
      <GridView
        dataSource={this.state.orders}
        name="gridTest"
        popUpTitle={"Add Test Item"}
        form={this.form()}
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleUpdate}
        id="ID"
      ></GridView>
    );
  }
}

export default Test;
