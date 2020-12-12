import {
  UPDATE_TABLE_CELL,
  GET_TABLE_DATA
} from "../actions/actionTypes";


interface StateType {
  tableData: any
};

const initialState: StateType = {
  tableData: [
    {
      col1: "Aurelia Vega",
      col2: "30",
      col3: "Deepends",
      col4: "Spain",
      col5: "Madrid"
    },
    {
      col1: "Guerra Cortez",
      col2: "45",
      col3: "Insectus",
      col4: "USA",
      col5: "San Francisco"
    },
    {
      col1: "Guadalupe House",
      col2: "26",
      col3: "Isotronic",
      col4: "Germany",
      col5: "Frankfurt am Main"
    },
    {
      col1: "Elisa Gallagher",
      col2: "31",
      col3: "Portica",
      col4: "United Kingdom",
      col5: "London"
    }
  ]
};

export default function tableReducer(state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_TABLE_CELL:
      console.log(
        state,
        "update table cell",
        action
      );
      return {
        ...state,
        ...action.payload
      };

    case GET_TABLE_DATA:
      console.log(state, "get table data", action.payload);
      return {
        ...state,
        ...action.payload
      };

    default:
      console.log("default action");
      return state;
  }
}