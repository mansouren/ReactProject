import React, { Component } from "react";
import {
  getAllItems,
  addItem,
  UpdateItem,
} from "../../services/ModuleServiceBrokerService";
import GridView from "../common/GridView";
import { Item } from "devextreme-react/form";
import { Form } from "devextreme-react/data-grid";

class ModuleServiceBroker extends Component {
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
        <Item dataField="AssemblyName" />
        <Item dataField="ClassName" />
        <Item dataField="ModuleType" />
        <Item dataField="Description" />
        <Item dataField="EnableReversal" />
        <Item dataField="IsFinancial" />
      </Form>
    );
  };
  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="ModuleServiceBrokers"
        popUpTitle="ModuleServiceBroker Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        form={this.form()}
      />
    );
  }
}

export default ModuleServiceBroker;
