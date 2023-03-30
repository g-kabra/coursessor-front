import { useState, useEffect } from 'react';

export default function Invoke() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://4ywlduggzuit4edt67uaubypzy0pjrci.lambda-url.eu-central-1.on.aws/', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ userInput })
      });

      if (response.ok) {
        const data = await response.json();
        setResponse(data.message);
        setTypingIndex(0); // reset the typing index when a new response is received
      } else {
        throw new Error('Request failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prevIndex) => {
        if (prevIndex === response.length) {
          clearInterval(interval); // stop the interval when typing is complete
        }
        return prevIndex + 1;
      });
    }, 50);
    return () => clearInterval(interval); // cleanup the interval when the component unmounts
  }, [response]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className='flex flex-col items-center '>
      <div className='p-10'>{response.substring(0, typingIndex)}</div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-15">
        <label>
          <input type="text" value={userInput} onChange={handleChange} className='bg-transparent' />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
