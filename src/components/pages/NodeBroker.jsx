import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  updateItem,
} from "../../services/NodeBrokerService";
import { getAllItems as getAllModuleServiceBrokers } from "../../services/ModuleServiceBrokerService";
import { getAllItems as getAllNodes } from "../../services/nodeServices";

class NodeBroker extends Component {
  state = {
    data: [],
    columns: [],
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const data = (await getAllItems()).sort((a, b) => b.ID - a.ID);
    const nodes = await getAllNodes();
    const moduleServiceBrokers = await getAllModuleServiceBrokers();
    const columns = [
      { NodeID: nodes, key: "ID", value: "NodeName" },
      { BrokerID: moduleServiceBrokers, key: "ID", value: "Description" },
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
    await updateItem(updateObj, updateObj.ID);
    await this.loadData();
  };

  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="nodeBrokers"
        popUpTitle="NodeBroker Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        lookupColumns={this.state.columns}
      />
    );
  }
}

export default NodeBroker;
