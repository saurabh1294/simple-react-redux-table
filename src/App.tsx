import React from "react";
import { connect } from "react-redux";
import { updateTableCell } from "./actions/actions";

import "./styles.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = (state: any) => {
  console.log('this is state in app.tsx', state);
  return {
    tableData: state.tableReducer.tableData 
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateTableCell : (data: string, row: Number, col: Number) => 
    dispatch(updateTableCell(data, row, col))
  }
}

class App extends React.Component <any, any> {
  state = {
    tableData: this.props.tableData
  }
  constructor (props: any) {
    super (props);
    console.log('this is the props', props);
  }

  updateValue(event: any, row: any, col: any) {
    console.log(event?.target?.firstChild?.data, event, 'here updated value');
    const { updateTableCell } = this.props;
    /*if (event?.target?.firstChild?.data !== this.props.tableData[row][`col${col+1}`]) {
      updateTableCell(event?.target?.firstChild?.data, row, col);
      alert();
    }
    console.log(this.props.tableData, this.state.tableData);*/
    updateTableCell(event?.target?.firstChild?.data, row, col);
   
    // alert(JSON.stringify(updateTableCell(event?.target?.firstChild?.data, row, col)));
    // updateTableCell(event?.target?.firstChild?.data, row, col);
  }

  render() {
    return (
      <div className="card">
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">Editable table</h3>
        <div className="card-body">
        <div id="table" className="table-editable">
          <span className="table-add float-right mb-3 mr-2"><a href="#!" className="text-success"><i
            className="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
              <tr>
                <th className="text-center">Person Name</th>
                <th className="text-center">Age</th>
                <th className="text-center">Company Name</th>
                <th className="text-center">Country</th>
                <th className="text-center">City</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.tableData.map((item: any, rowIndex: any)=> {
                    return (<tr key={rowIndex}>
                    {
                      Object.entries(item).map((colItem: any, colIndex: any) => {
                        return(<td key={colIndex} className="pt-3-half" contentEditable="true" 
                        onBlur={(e)=>this.updateValue(e, rowIndex, colIndex)}
                        suppressContentEditableWarning={true}>{colItem[1]}</td>);
                      })
                    }
                    </tr>);
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

