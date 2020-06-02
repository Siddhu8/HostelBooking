import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Tables = (auth) => (
  <Table inverted size='large'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>#</Table.HeaderCell>
        <Table.HeaderCell>CMRCET</Table.HeaderCell>
        <Table.HeaderCell>CMRIT</Table.HeaderCell>
        <Table.HeaderCell>CMRTC</Table.HeaderCell>
        <Table.HeaderCell>CMREC</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1st Year</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>1</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2nd Year</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>0</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>3rd Year</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>1</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>4th Year</Table.Cell>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>3</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

Tables.PropType = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Tables);
