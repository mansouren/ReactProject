import React, { Component } from "react";
import { getAllItems, addItem, UpdateItem } from "../../services/nodeServices";
import GridView from "../common/GridView";
import { Item } from "devextreme-react/form";
import { Form } from "devextreme-react/data-grid";

class Nodes extends Component {
  state = {
    data: [],
    columns: [],
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const data = (await getAllItems()).sort((a, b) => b.ID - a.ID);
    const columns = [
      { dataField: "ID", editable: false },
      { dataField: "NodeName" },
      { dataField: "MonitoringIPAddress" },
      { dataField: "MonitoringPort", type: "number" },
      { dataField: "HsmEnabled", type: "boolean" },
      { dataField: "PrSwitchCode", type: "number" },
      { dataField: "AcqSwitchCode", type: "number" },
      { dataField: "IssSwitchCode", type: "number" },
      { dataField: "CommandIPAddress" },
      { dataField: "CommandPort", type: "number" },
      { dataField: "BaseLogAddress" },
      { dataField: "IssuerFITTableID", type: "number" },
      { dataField: "TopupEnabled", type: "boolean" },
      { dataField: "TestTerminals" },
      { dataField: "MaxThreadPool", type: "number" },
      { dataField: "MultiWorker", type: "boolean" },
      { dataField: "ZoneId", type: "number" },
      { dataField: "RemoteUpdateEnabled", type: "boolean" },
      { dataField: "CurrentVersion", type: "number" },
      { dataField: "UpgrageRequired", type: "boolean" },
      { dataField: "NextState", type: "number" },
      { dataField: "LastUpgradeOn", type: "datetime" },
      { dataField: "LastChangeStateOn", type: "datetime" },
      { dataField: "ExpceptionLogPath" },
      { dataField: "BinaryAddress" },
      { dataField: "IsNative", type: "boolean" },
      { dataField: "Cmd", type: "number" },
      { dataField: "PID", type: "number" },
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
        name="nodes"
        popUpTitle="Node Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        customColumns={this.state.columns}
      />
    );
  }
}

export default Nodes;
