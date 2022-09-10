import React, { Component } from "react";
import {
  getAllItems,
  addItem,
  UpdateItem,
} from "../../services/EntityIDService";
import GridView from "../common/GridView";

class EntityID extends Component {
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

  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="EntityIDs"
        popUpTitle="EntityID Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
      />
    );
  }
}

export default EntityID;
