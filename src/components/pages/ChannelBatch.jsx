import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  updateItem,
} from "./../../services/ChannelBatchService";
import { getAllItems as getAllChannelInfos } from "../../services/ChannelnfoService";

class ChannelBatch extends Component {
  state = {
    data: [],
    columns: [],
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const data = await getAllItems();
    const channelInfos = await getAllChannelInfos();
    const columns = [
      { dataField: "ID", editable: false },
      { dataField: "BatchMonth", type: "number" },
      { dataField: "BatchDay" },
      {
        dataField: "InterfaceID",
        caption: "ChannelInfo",
        lookup: true,
        data: channelInfos,
        key: "ID",
        value: "Identifier",
      },
      { dataField: "FromDate", type: "datetime" },
      { dataField: "ToDate", type: "datetime" },
      { dataField: "TraceNo" },
      { dataField: "TrTraceNo" },
      { dataField: "ServerDateTime", type: "datetime" },
      { dataField: "IsActive", type: "boolean" },
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
        name="gridChannelBatches"
        popUpTitle="ChannelBatch Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        customColumns={this.state.columns}
      />
    );
  }
}

export default ChannelBatch;
