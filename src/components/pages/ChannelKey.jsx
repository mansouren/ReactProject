import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  updateItem,
} from "./../../services/ChannelkeyService";
import { getAllItems as getAllChannels } from "../../services/ChannelnfoService";

class ChannelKey extends Component {
  state = {
    data: [],
    columns: [],
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const data = (await getAllItems()).sort((a, b) => b.ID - a.ID);
    const channels = await getAllChannels();
    const columns = [
      { dataField: "ID", editable: false },
      { dataField: "Title" },
      {
        dataField: "ChannelID",
        caption: "Channel",
        lookup: true,
        data: channels,
        key: "ID",
        value: "Identifier",
      },
      { dataField: "KeyIndex" },
      { dataField: "KeyUsage" },
      { dataField: "KeyEntryID" },
      { dataField: "OldKeyEntryID" },
      { dataField: "IsActive", type: "boolean" },
      { dataField: "CreatedOn", type: "datetime", editable: false },
      { dataField: "ModifiedOn", type: "datetime", editable: false },
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
        name="gridChannelKeys"
        popUpTitle="ChannelKey Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        customColumns={this.state.columns}
      />
    );
  }
}

export default ChannelKey;
