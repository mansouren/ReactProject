import React, { Component } from "react";
import {
  getAllItems,
  addItem,
  UpdateItem,
} from "./../../services/MessageMapService";
import { Form } from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";
import GridView from "../common/GridView";

class MessageMap extends Component {
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
    await UpdateItem(updateObj, updateObj.ID);
    await this.loadData();
  };
  form = () => {
    return (
      <Form>
        <Item dataField="ChannelIdentifier" />
        <Item dataField="MTI" />
        <Item dataField="PrCode" />
        <Item dataField="MappedMTI" />
        <Item dataField="MappedPrCode" />
        <Item dataField="IsAllowed" />
      </Form>
    );
  };
  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="gridMessageMaps"
        popUpTitle="MessageMap Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        form={this.form()}
      />
    );
  }
}

export default MessageMap;
