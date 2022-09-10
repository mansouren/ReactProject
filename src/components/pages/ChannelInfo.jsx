import React, { Component } from "react";
import GridView from "../common/GridView";
import {
  getAllItems,
  addItem,
  UpdateItem,
} from "./../../services/ChannelnfoService";
// import { Form, StringLengthRule } from "devextreme-react/data-grid";
// import { Item } from "devextreme-react/form";
import { getAllItems as getAllswitches } from "../../services/SwitchService";

class ChannelInfo extends Component {
  state = {
    data: [],
    columns: [],
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const data = (await getAllItems()).sort((a, b) => b.ID - a.ID);
    const switches = await getAllswitches();
    const columns = [
      { dataField: "ID", editable: false },
      {
        dataField: "SwitchCode",
        caption: "Switch",
        lookup: true,
        data: switches,
        key: "ID",
        value: "SwitchName",
      },
      { dataField: "Identifier" },
      { dataField: "ZMKEntryID" },
      { dataField: "IIN" },
      { dataField: "KeyCount" },
      { dataField: "InterchangeFeeTableID" },
      { dataField: "RRNSeedID" },
      { dataField: "FITID" },
      { dataField: "Description" },
      { dataField: "CreatedOn", type: "datetime", editable: false },
      { dataField: "SecurityType" },
      { dataField: "EncyptionMethodType" },
      { dataField: "MacMethodType" },
      { dataField: "MacFormat" },
      { dataField: "ChannelType" },
      { dataField: "DefaultCurrency" },
      { dataField: "SupportedCurrencies" },
      { dataField: "CardExchnageTableId" },
      { dataField: "SettlementExchangeTableId" },
      { dataField: "TransactionExchangeTableId" },
      { dataField: "SupportedSettlementCurrencies" },
      { dataField: "IsSettlementSupported" },
      { dataField: "ChannelBankAccountId" },
      { dataField: "SupportedCardHolderCurrencies" },
      { dataField: "SupportedTxnTypes" },
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

  // form = () => {
  //   return (
  //     <Form>
  //       {/* <Item dataField="ID" caption="ID" /> */}
  //       <Item dataField="SwitchCode" caption="SwitchCode" isRequired={true} />
  //       <Item dataField="Identifier" caption="Identifier" isRequired={true}>
  //         <StringLengthRule
  //           max={50}
  //           message="Identifier must be less than 50 characters"
  //         />
  //       </Item>
  //       <Item dataField="ZMKEntryID" caption="ZMKEntryID" />
  //       <Item dataField="IIN" caption="IIN" isRequired={true}>
  //         <StringLengthRule
  //           max={50}
  //           message="IIN must be less than 50 characters"
  //         />
  //       </Item>
  //       <Item dataField="KeyCount" caption="KeyCount" />
  //       <Item
  //         dataField="InterchangeFeeTableID"
  //         caption="InterchangeFeeTableID"
  //       />
  //       <Item dataField="RRNSeedID" caption="RRNSeedID" />
  //       <Item dataField="FITID" caption="FITID" />
  //       <Item dataField="Description" caption="Description">
  //         <StringLengthRule
  //           max={50}
  //           message="Description must be less than 50 characters"
  //         />
  //       </Item>

  //       <Item
  //         dataField="SecurityType"
  //         caption="SecurityType"
  //         isRequired={true}
  //       />
  //       <Item
  //         dataField="EncyptionMethodType"
  //         caption="EncyptionMethodType"
  //         isRequired={true}
  //       />
  //       <Item
  //         dataField="MacMethodType"
  //         caption="MacMethodType"
  //         isRequired={true}
  //       />
  //       <Item dataField="MacFormat" caption="MacFormat" isRequired={true} />
  //       <Item dataField="ChannelType" caption="ChannelType" isRequired={true} />
  //       <Item dataField="DefaultCurrency" caption="DefaultCurrency" />
  //       <Item
  //         dataField="SupportedCurrencies"
  //         caption="SupportedCurrencies"
  //         isRequired={true}
  //       >
  //         <StringLengthRule
  //           max={500}
  //           message="SupportedCurrencies must be less than 50 characters"
  //         />
  //       </Item>
  //       <Item dataField="CardExchnageTableId" caption="CardExchnageTableId" />
  //       <Item
  //         dataField="SettlementExchangeTableId"
  //         caption="SettlementExchangeTableId"
  //       />
  //       <Item
  //         dataField="TransactionExchangeTableId"
  //         caption="TransactionExchangeTableId"
  //       />
  //       <Item
  //         dataField="SupportedSettlementCurrencies"
  //         caption="SupportedSettlementCurrencies"
  //         isRequired={true}
  //       >
  //         <StringLengthRule
  //           max={500}
  //           message="SupportedSettlementCurrencies must be less than 50 characters"
  //         />
  //       </Item>
  //       <Item
  //         dataField="IsSettlementSupported"
  //         caption="IsSettlementSupported"
  //       />
  //       <Item dataField="ChannelBankAccountId" caption="ChannelBankAccountId" />
  //       <Item
  //         dataField="SupportedCardHolderCurrencies"
  //         caption="SupportedCardHolderCurrencies"
  //         isRequired={true}
  //       >
  //         <StringLengthRule
  //           max={500}
  //           message="SupportedCardHolderCurrencies must be less than 50 characters"
  //         />
  //       </Item>
  //       <Item
  //         dataField="SupportedTxnTypes"
  //         caption="SupportedTxnTypes"
  //         isRequired={true}
  //       >
  //         <StringLengthRule
  //           max={500}
  //           message="SupportedTxnTypes must be less than 50 characters"
  //         />
  //       </Item>
  //     </Form>
  //   );
  // };

  render() {
    return (
      <GridView
        dataSource={this.state.data}
        name="gridChannelInfos"
        popUpTitle="ChannelInfo Information"
        onRowUpdating={this.handleUpdate}
        onRowInserting={this.handleAdd}
        customColumns={this.state.columns}
      />
    );
  }
}

export default ChannelInfo;
