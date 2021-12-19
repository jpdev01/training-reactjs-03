import React, { Component, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import InsertRecords from "../record/insert/InsertRecord";

export default (props) => {
  const { match } = props.props; // props do elemento pai
  return (
    <BrowserRouter>
      <Route path={`asd/record`} component={InsertRecords} />
    </BrowserRouter>
  );
};
