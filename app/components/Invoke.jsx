import { useState } from 'react';

export default function Invoke() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api.coursessor.com/', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput })
      });

      if (response.ok) {
        const data = await response.json();
        setResponse(data.message);
      } else {
        throw new Error('Request failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className='flex flex-col items-center '>
      <div className='pt-10'>{response}</div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between">
        <label>
          User input:
          <input type="text" value={userInput} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
