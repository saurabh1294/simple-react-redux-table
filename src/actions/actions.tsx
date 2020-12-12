import {
    UPDATE_TABLE_CELL, 
    GET_TABLE_DATA
  } from "./actionTypes";

export const fetchTableData = (data: any) => {
    return {
        type: GET_TABLE_DATA,
        state: "GET_TABLE_DATA",
        payload: data
    };
};

export const updateTableCell = (data: any, row: Number, col: Number) => {
    return {
        type: UPDATE_TABLE_CELL,
        state: "UPDATE_TABLE_CELL",
        payload: data,
        rowNum: row,
        colNum: col
    };
};

export {};