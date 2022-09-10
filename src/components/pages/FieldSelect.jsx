import React, { Component } from "react";
import {
  getAllItems,
  addItem,
  UpdateItem,
} from "../../services/FieldSelectService";
import GridView from "../common/GridView";

class FieldSelect extends Component {
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
      { dataField: "GroupId" },
      { dataField: "Mti", type: "number" },
      { dataField: "PrCode", type: "number" },
      { dataField: "FieldMap" },
      { dataField: "AllowMac", type: "boolean" },
      { dataField: "ChannelIdentifier" },
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
        name="FieldSelect"
        popUpTitle="FieldSelect Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        customColumns={this.state.columns}
      />
    );
  }
}

export default FieldSelect;
