import React from 'react';
import PropTypes from 'prop-types';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
} from 'react-md';

import Markdown from 'components/Markdown';
import CodeVariable from 'components/CodeVariable';

const FunctionParameterTable = ({ params }) => {
  if (!params.length) {
    return null;
  }

  return (
    <DataTable plain>
      <TableHeader>
        <TableRow>
          <TableColumn>Name</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Description</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {params.map(({ name, type, description, required }) => (
          <TableRow key={name}>
            <TableColumn>
              <CodeVariable lang="js">
                {`${name}${required ? ' *' : ''}`}
              </CodeVariable>
            </TableColumn>
            <TableColumn>
              <CodeVariable lang="js">{type}</CodeVariable>
            </TableColumn>
            <TableColumn className="prop-types__cell">
              <Markdown markdown={description} />
            </TableColumn>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  );
};

FunctionParameterTable.propTypes = {
  params: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
  })).isRequired,
};
export default FunctionParameterTable;
