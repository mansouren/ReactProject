import React, { Component } from "react";
import DataGrid, {
  Editing,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  ColumnChooser,
  Scrolling,
  Popup,
  Form,
  Item,
  Column,
  Lookup,
  FilterRow,
  HeaderFilter,
  SearchPanel,
} from "devextreme-react/data-grid";
import "./GridView.css";

const allowedPageSizes = [15, 20, 25, 30];

class GridView extends Component {
  getCustomColumns = (dataSource) => {
    const data = Object.keys(dataSource).map((column) => {
      return { dataField: column };
    });

    return data;
  };

  generateForm = () => {
    let { form, customColumns, dataSource } = this.props;

    if (form) return form;

    if (!customColumns) {
      if (!dataSource[0]) return null;

      customColumns = this.getCustomColumns(dataSource[0]);
    }

    return (
      <Form>
        {customColumns.map((column) => {
          const editable =
            column.editable === undefined ? true : column.editable;
          if (!editable) return null;
          return <Item key={column.dataField} dataField={column.dataField} />;
        })}
      </Form>
    );
  };

  generateColumns = () => {
    if (this.props.children) return this.props.children;

    let { customColumns, dataSource } = this.props;

    if (!customColumns) {
      if (!dataSource[0]) return null;

      customColumns = this.getCustomColumns(dataSource[0]);
    }

    return customColumns.map((column) => {
      return (
        <Column
          key={column.dataField}
          dataField={column.dataField}
          dataType={column.type && column.type}
          caption={column.caption && column.caption}
        >
          {column.lookup && (
            <Lookup
              dataSource={column.data}
              valueExpr={column.key}
              displayExpr={(item) =>
                item[column.key] + " - " + item[column.value]
              }
            />
          )}
        </Column>
      );
    });
  };
  render() {
    return (
      <DataGrid
        id={this.props.name}
        dataSource={this.props.dataSource}
        keyExpr={this.props.id ? this.props.id : "ID"}
        showColumnLines={true}
        showRowLines={true}
        showBorders={true}
        rowAlternationEnabled={true}
        className="dataGrid"
        repaintChangesOnly={false}
        columnResizingMode="widget"
        allowColumnResizing={true}
        hoverStateEnabled={true}
        allowColumnReordering={true}
        columnMinWidth={150}
        columnAutoWidth={true}
        {...this.props}
      >
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <SearchPanel visible={true} width={240} placeholder="Search..." />
        <Scrolling columnRenderingMode="virtual" />
        <Editing mode="popup" allowAdding={true} allowUpdating={true}>
          <Popup
            title={this.props.popUpTitle}
            showTitle={true}
            width={700}
            height={525}
          />
          {this.generateForm()}
        </Editing>
        <Grouping contextMenuEnabled={true} expandMode="rowClick" />
        <GroupPanel
          visible={true}
          emptyPanelText="Use the context menu of header columns to group data"
        />
        <Pager
          allowedPageSizes={allowedPageSizes}
          showInfo={true}
          showNavigationButtons={true}
          showPageSizeSelector={true}
          visible={true}
        />
        <Paging defaultPageSize={15} />
        <ColumnChooser enabled={true} mode="select" />
        {this.generateColumns()}
      </DataGrid>
    );
  }
}

export default GridView;
