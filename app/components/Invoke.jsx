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
      <form onSubmit={handleSubmit} className="flex flex-wrap flex-col justify-between mt-15">
        <label>
          <textarea value={userInput} placeholder="Your text here..." onChange={handleChange} className='bg-transparent border rounded-lg mt-10' rows="2" cols="35" />
        </label>
        <button type="submit" class="text-white focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center">
        Start
        <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      </form>
    </div>
  );
}
