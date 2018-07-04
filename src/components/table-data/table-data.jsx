import React, { Component } from "react";
import * as TableDataActions from "./table-data.actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class TableData extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  componentWillUnmount() {
    this.props.purgeData();
  }

  renderTable = () => {
    return (
      <div className="table-content">
        {this.props.dataLoaded && this.props.data.length ? (
          <table>
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map(item => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "No data"
        )}
      </div>
    );
  };

  render() {
    return (
      <div className="table-holder">
        {this.props.fetching ? (
          <h3 style={{ textAlign: "center" }}>Fetching</h3>
        ) : (
          this.renderTable()
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state.tableData;
const mapDispatchToProps = dispatch =>
  bindActionCreators(TableDataActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
