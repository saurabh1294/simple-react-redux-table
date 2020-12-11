import React from "react";
import { connect } from "react-redux";

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

  handleChange(event: any) {
    console.log('this is the event', event);
  }

  updateValue(event: any) {
    console.log(event?.target?.firstChild?.data, event, 'here updated value');
    // TODO fire an action from here with data event?.target?.firstChild?.data to update and get the persistent state 
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
              <tr>
                <td className="pt-3-half" contentEditable="true" onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>
                  {this.props?.tableData[0].col1}
                </td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>30</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Deepends</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Spain</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Madrid</td>
              </tr>
              <tr>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Guerra Cortez</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>45</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Insectus</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>USA</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>San Francisco</td>
              </tr>
              <tr>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Guadalupe House</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>26</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Isotronic</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Germany</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Frankfurt am Main</td>
              </tr>
              <tr className="hide">
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Elisa Gallagher</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>31</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>Portica</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>United Kingdom</td>
                <td className="pt-3-half" contentEditable="true"  onBlur={this.updateValue.bind(this)} onMouseUp={this.handleChange.bind(this)} 
                onKeyDown={this.handleChange.bind(this)}>London</td>
              </tr>
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

