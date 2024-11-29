import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
const FetchingData = () => {
  const [data, setData] = useState([]);
  console.log('first::::::::', data);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result) => {
        console.log('result::', result); // Log the fetched data
        setData(result); // Correctly update state
      });
    //   .then((data) => setData(data));
  }, []);

  return (
    <div className='parent_fetch_data_component'>
      <Table striped bordered hover>
        <thead style={{ border: '5px solid #AAFF00' }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody style={{ border: '5px solid #B65FCF' }}>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FetchingData;
