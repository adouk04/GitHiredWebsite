import Table from 'react-bootstrap/Table';
/* 
Parameters:
{Date, Event, Time}
*/
function EventTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Event</th>
          <th>Event Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>April 7th 2025</td>
          <td>Joy 217</td>
          <td>Club Meeting</td>
          <td>1:00PM - 3:00PM</td>
        </tr>
        <tr>
          <td>April 9th 2025</td>
          <td>Joy 217</td>
          <td>Club Meeting</td>
          <td>1:00PM - 3:00PM</td>
        </tr>
        <tr>
          <td>May 3rd 2025</td>
          <td>YMCA</td>
          <td>UWT Coding Competition</td>
          <td>12:00PM - 6:00PM</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default EventTable;