import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  updateItem,
} from "./../../services/SwitchService";
import { Form } from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";

class Switch extends Component {
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
        <Item dataField="SwitchCode" />
        <Item dataField="SwitchName" />
        <Item dataField="SwitchAccountID" />
        <Item dataField="TraceEntityID" />
        <Item dataField="TerminalEntityID" />
        <Item dataField="MerchantEntityID" />
        <Item dataField="NodeType" />
        <Item dataField="WatchOutAddress" />
        <Item dataField="IssuerMonitorSupport" />
        <Item dataField="RemoteAccessSupport" />
        <Item dataField="RemoteAccessPassword" />
        <Item dataField="ATMSupport" />
        <Item dataField="IVRSupport" />
        <Item dataField="POSSupport" />
        <Item dataField="KIOSKSupport" />
        <Item dataField="MobileSupport" />
        <Item dataField="NETSupport" />
        <Item dataField="SettlementModel" />
        <Item dataField="TerminalKeyID" />
        <Item dataField="IIN" />
        <Item dataField="IssuerFITTableID" />
      </Form>
    );
  };
  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="switch"
        popUpTitle="Switch Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        form={this.form()}
      />
    );
  }
}

export default Switch;
