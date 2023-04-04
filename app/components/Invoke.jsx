import { useState, useEffect } from 'react';

export default function Invoke() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.coursessor.com/', {
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
    } finally {
      setIsLoading(false);
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
    <div className='flex flex-col items-center mt-20'>
      {response !== '' && (
        <div className='response p-10 border rounded-lg w-full'>{response.substring(0, typingIndex)}</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-15">
        <label>
          <textarea placeholder='Your text here...' value={userInput} onChange={handleChange} className='bg-transparent border rounded-lg mt-10 w-80 h-12' />
        </label>
        <button type="submit" disabled={isLoading} className="focus:outline-none font-medium rounded-lg text-lg py-2.5 text-center inline-flex items-center">
          {isLoading ? (
            <div role="status">
              <div class="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              Start
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </>
          )}
        </button>



      </form>
    </div>
  );
}


