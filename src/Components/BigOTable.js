import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class BigOTable extends Component {
  render() {
    const { rows } = this.props;
    return (
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Complexiy</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row) => (
            <Table.Row>
              <Table.Cell>{row.method}</Table.Cell>
              <Table.Cell>{row.complexity}</Table.Cell>
              <Table.Cell>{row.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default BigOTable;
