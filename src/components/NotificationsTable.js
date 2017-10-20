import React from 'react'
import { Table } from 'react-bootstrap';

const TD = ({content}) => <td style={{padding:0}}><input style={{width:100}} value={content} /></td>

const NotificationsTable = () => (
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <TD content="1"/>
        <TD content="Hello"/>
        <TD content="Hello"/>
        <TD content="Hello"/>
        <TD content="Hello"/>
        <TD content="Hello"/>
        <TD content="Hello"/>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td style={{padding:0}}><textarea>Table cell</textarea></td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
);



export default NotificationsTable
