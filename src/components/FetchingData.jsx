import { useEffect, useState } from 'react';

const FetchingData = () => {
  const [data, setData] = useState([]);
  console.log('first::::::::', data);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result) => {
        console.log('result::', result); // Log the fetched data
        setData(result);     // Correctly update state
      });
    //   .then((data) => setData(data));
  }, []);

  return <div>Hello</div>;
};

export default FetchingData;
