import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  updateItem,
} from "./../../services/ModuleTPService";
import { Form } from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";

class ModuleTP extends Component {
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
        <Item dataField="ServiceBrokerID" />
        <Item dataField="AssemblyName" />
        <Item dataField="ClassName" />
        <Item dataField="ModuleType" />
        <Item dataField="Description" />
        <Item dataField="EnableReversal" />
        <Item dataField="IsFinancial" />
        <Item dataField="MTI" />
        <Item dataField="PrCode" />
        <Item dataField="EnableLog" />
        <Item dataField="EnableConsole" />
        <Item dataField="TxnType" />
        <Item dataField="MappingRequired" />
        <Item dataField="IsAllowed" />
        <Item dataField="DestFunctionCode" />
      </Form>
    );
  };
  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="moduleTP"
        popUpTitle="ModuleTP Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        form={this.form()}
      />
    );
  }
}

export default ModuleTP;
