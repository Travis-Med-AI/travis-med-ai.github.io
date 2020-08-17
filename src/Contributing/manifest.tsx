/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SFC } from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { Check } from "@styled-icons/bootstrap/Check";
import { Cross } from "@styled-icons/entypo/Cross";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "#F5F6F7",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
import {
  docParams,
  DocEnum,
  docStudyType,
  docModality,
  docModelInputs,
  docModelOutputs,
} from "med-ai-common";

const docEnums: Array<DocEnum> = [
  docStudyType,
  docModality,
  docModelInputs,
  docModelOutputs,
];

const tableStyle = {
  "font-weight": "bold",
};

export const ParamTable = () => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>variable</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Required?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {docParams.map((item) => {
            return (
              <TableRow>
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell>
                  {docEnums
                    .map((x) => x.typeString)
                    .includes(item.typeString) ? (
                    <a href={"#" + item.typeString}>{item.typeString}</a>
                  ) : (
                    item.typeString
                  )}
                </StyledTableCell>
                <StyledTableCell>{item.description}  
                  {docEnums
                    .map((x) => x.typeString)
                    .includes(item.typeString) ? (<div> See
                    <a href={"#" + item.typeString}>{item.typeString}</a> below.</div>): ""
                  }
                </StyledTableCell>
                <StyledTableCell>
                  {item.required ? <Check size="15" /> : <Cross size="15" />}
                </StyledTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const EnumerableTable = (property: DocEnum) => {
  return (
    <>
      <h3><a id={property.typeString}>{property.typeString}</a></h3>
      <p>{property.description}</p>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Enum Value</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {property.values.map((item) => {
              return (
                <TableRow>
                  <StyledTableCell>{item.enum}</StyledTableCell>
                  <StyledTableCell>{item.description}</StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export const EnumsBlock = () => {
  return (
    <>
      {docEnums.map((item) => {
        return EnumerableTable(item);
      })}
    </>
  );
};
