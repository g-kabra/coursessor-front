import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Invoke() {
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState([]);
  const [typingIndex, setTypingIndex] = useState([]);

  const useLocalStorage = typeof window !== 'undefined' && 'localStorage' in window;

  useEffect(() => {
    if (useLocalStorage) {
      const storedResponses = localStorage.getItem('responses');
      const storedTypingIndex = localStorage.getItem('typingIndex');
      if (storedResponses && storedTypingIndex) {
        setResponses(JSON.parse(storedResponses));
        setTypingIndex(JSON.parse(storedTypingIndex));
      }
    } else {
      const storedResponses = Cookies.getJSON('responses');
      const storedTypingIndex = Cookies.getJSON('typingIndex');
      if (storedResponses && storedTypingIndex) {
        setResponses(storedResponses);
        setTypingIndex(storedTypingIndex);
      }
    }
  }, []);

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
        setResponses((responses) => [...responses, data.message]);
        setTypingIndex((prevTypingIndex) => [...prevTypingIndex, 0]);
        if (useLocalStorage) {
          localStorage.setItem('responses', JSON.stringify([...prevResponses, data.message]));
          localStorage.setItem('typingIndex', JSON.stringify([...prevTypingIndex, 0]));
        } else {
          Cookies.set('responses', [...prevResponses, data.message], { expires: 1 });
          Cookies.set('typingIndex', [...prevTypingIndex, 0], { expires: 1 });
        }
      } else {
        throw new Error('Request failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const intervals = responses.map((response, i) => {
      return setInterval(() => {
        setTypingIndex((prevTypingIndex) => {
          if (prevTypingIndex[i] === response.length) {
            clearInterval(intervals[i]);
          }
          return prevTypingIndex.map((index, j) => {
            return j === i ? index + 1 : index;
          });
        });
      }, 50);
    });
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [responses]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      {responses.map((response, i) => (
        <div key={i} className="response p-10 border rounded-lg w-full mt-5">
          {response.substring(0, typingIndex[i])}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="flex flex-wrap flex-col justify-between mt-5">
        <label>
          <textarea value={userInput} placeholder="Your text here..." onChange={handleChange} className="bg-transparent border rounded-lg mt-5" rows="2" cols="35" />
        </label>
        <button type="submit" className="text-white focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center">
          Start
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
