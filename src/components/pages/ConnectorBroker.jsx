import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  UpdateItem,
} from "./../../services/ConnectorBrokerService";
import { getAllItems as getNodes } from "./../../services/nodeServices";
import { getAllItems as getModuleTps } from "./../../services/ModuleTPService";
import { getAllItems as getChannelInfos } from "./../../services/ChannelnfoService";
import { getAllItems as getSwitchCodes } from "./../../services/SwitchService";
import { getAllItems as getAllModuleFormatters } from "../../services/ModuleFormatterService";
import { getAllItems as getAllModuleValidators } from "../../services/ModuleValidatorService";
import { getAllItems as getAllModules } from "../../services/ModuleService";

class ConnectorBroker extends Component {
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
    const moduleTps = await getModuleTps();
    const channelInfos = await getChannelInfos();
    const switches = await getSwitchCodes();
    const moduleFormatters = await getAllModuleFormatters();
    const moduleValidators = await getAllModuleValidators();
    const modules = await getAllModules();
    const columns = [
      { dataField: "ID", editable: false },
      { dataField: "Description" },
      {
        dataField: "NodeID",
        caption: "Node",
        lookup: true,
        data: nodes,
        key: "ID",
        value: "NodeName",
      },
      {
        dataField: "ChannelID",
        caption: "Channel",
        lookup: true,
        data: channelInfos,
        key: "ID",
        value: "Identifier",
      },
      { dataField: "ConnectorName" },
      { dataField: "RemoteIP" },
      { dataField: "RemotePort", type: "number" },
      { dataField: "LocalIP" },
      { dataField: "LocalPort" },
      { dataField: "ConnectionType", type: "number" },
      { dataField: "PosCondition", type: "number" },
      { dataField: "HeaderLength", type: "number" },
      { dataField: "TrailerLength", type: "number" },
      { dataField: "Header" },
      { dataField: "Trailer" },
      { dataField: "NotifierID", type: "number" },
      { dataField: "NotifierName" },
      { dataField: "BrokerID", type: "number" },
      { dataField: "Timeout", type: "number" },
      { dataField: "SecurityModel", type: "number" },
      { dataField: "PublicKey" },
      { dataField: "PrivateKey" },
      { dataField: "PKCS12" },
      { dataField: "Passshare" },
      { dataField: "Mode", type: "number" },
      { dataField: "DualPort", type: "boolean" },
      { dataField: "IsActive", type: "boolean" },
      {
        dataField: "ChannelModuleID",
        caption: "Module",
        lookup: true,
        data: modules,
        key: "ID",
        value: "Description",
      },
      {
        dataField: "PackagerModuleID",
        caption: "ModuleFormatter",
        lookup: true,
        data: moduleFormatters,
        key: "ID",
        value: "Description",
      },
      { dataField: "EnableLog", type: "boolean" },
      { dataField: "ConsoleLog", type: "boolean" },
      {
        dataField: "SourceSwitchCode",
        caption: "Switch",
        lookup: true,
        data: switches,
        key: "ID",
        value: "SwitchName",
      },
      {
        dataField: "ValidatorGroupID",
        caption: "ModuleValidators",
        lookup: true,
        data: moduleValidators,
        key: "ID",
        value: "Description",
      },
      {
        dataField: "ModuleID",
        caption: "ModuleTps",
        lookup: true,
        data: moduleTps,
        key: "ID",
        value: "Description",
      },
      // { dataField: "ModuleType", type: "number" },
      { dataField: "LenType", type: "number" },
      { dataField: "CoreID", type: "number" },
      { dataField: "IsPermanent", type: "boolean" },
      { dataField: "IsPriority", type: "boolean" },
      { dataField: "SecurityModuleEnabled", type: "boolean" },
      { dataField: "AdvancedMessagingEnable", type: "boolean" },
      { dataField: "ReplyHeaderLength", type: "number" },
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
        name="connectorBrokers"
        popUpTitle="ConnectorBroker Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        customColumns={this.state.columns}
      />
    );
  }
}

export default ConnectorBroker;
