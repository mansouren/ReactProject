import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  updateItem,
} from "./../../services/ModuleValidatorService";
import { Form } from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";

class ModuleValidator extends Component {
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
        <Item dataField="ID" />
        <Item dataField="AssemblyName" />
        <Item dataField="ClassName" />
        <Item dataField="ModuleType" />
        <Item dataField="Description" />
        <Item dataField="Direction" />
        <Item dataField="ValidatorGroupID" />
        <Item dataField="Priority" />
      </Form>
    );
  };
  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="moduleValidators"
        popUpTitle="ModuleValidator Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        form={this.form()}
      />
    );
  }
}

export default ModuleValidator;
