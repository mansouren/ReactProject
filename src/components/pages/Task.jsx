import React, { Component } from "react";
import { getAllItems, addItem, UpdateItem } from "../../services/TaskService";
import GridView from "../common/GridView";
import { getAllItems as getNodes } from "../../services/nodeServices";
import { getAllItems as getmodules } from "../../services/ModuleService";

class Task extends Component {
  state = {
    data: [],
    columns: [],
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const data = (await getAllItems()).sort((a, b) => b.ID - a.ID);
    const nodes = await getNodes();
    const modules = await getmodules();
    const columns = [
      { NodeID: nodes, key: "ID", value: "NodeName" },
      { TaskModuleID: modules, key: "ID", value: "Description" },
    ];
    this.setState({
      data,
      columns,
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

  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="Tasks"
        popUpTitle="Task Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        lookupColumns={this.state.columns}
      />
    );
  }
}

export default Task;
