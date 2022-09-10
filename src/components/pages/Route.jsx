import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  updateItem,
} from "./../../services/RouteService";
import { Form } from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";

class Route extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    this.setState({
      data: (await getAllItems()).sort((a, b) => b.ID - a.ID),
    });
  };

  handleAdd = async (e) => {
    await addItem(e.data);
    await this.loadData();
  };

  handleUpdate = async (e) => {
    const updateObj = { ...e.oldData, ...e.newData };
    await updateItem(updateObj, updateObj.ID);
    await this.loadData();
  };

  form = () => {
    return (
      <Form>
        <Item dataField="NodeID" />
        <Item dataField="SourceChannelID" />
        <Item dataField="DestConnector" />
        <Item dataField="ServiceBrokerID" />
        <Item dataField="ManagerID" />
        <Item dataField="IIN" />
        <Item dataField="FromPan" />
        <Item dataField="ToPan" />
        <Item dataField="FromTerm" />
        <Item dataField="ToTerm" />
        <Item dataField="Mti" />
        <Item dataField="PrCode" />
        <Item dataField="PosCondition" />
        <Item dataField="Priority" />
        <Item dataField="SourceConnector" />
        <Item dataField="GroupId" />
        <Item dataField="CardGroupId" />
      </Form>
    );
  };
  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="route"
        popUpTitle="Route Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        form={this.form()}
      />
    );
  }
}

export default Route;
