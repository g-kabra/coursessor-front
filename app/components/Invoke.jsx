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
      {response !== '' && (
        <div className='response p-10 border rounded-lg w-full'>{response.substring(0, typingIndex)}</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-15">
        <label>
          <textarea value={userInput} onChange={handleChange} className='bg-transparent border rounded-lg mt-10 mx-10' rows="4" cols="40" />
        </label>
        <button type="submit" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm mx-10 py-2.5 text-center  mt-5 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 0x">Start</button>
      </form>
    </div>
  );
}
