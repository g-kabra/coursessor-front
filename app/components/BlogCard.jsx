import Link from 'next/link';

export default function BlogCard(props) {
  const { className, imageSrc, alt, headline, description, href } = props;

  return (
    <div className="card flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img
      src={imageSrc}
      alt={alt}
      className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-l-lg"
    />
    <div className="flex flex-col justify-between p-4 leading-normal w-full">
      <h5 className="title text-3xl mg:text-2xl font-satoshi  font-bold tracking-tight text-left  dark:text-white">{headline}</h5>
      <p className="text-2xl mg:text-xl mb-3 font-satoshi font-normal  dark:text-gray-400">{description}</p>
    </div>



    <Link href={href} className=" button flex justify-start w-full ml-6 mb-5  items-center px-2 py-2 text-xl mg:text-lg font-satoshi font-medium text-center rounded-lg focus:ring-4 focus:outline-none">
      Citeste mai mult
      <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>

    </Link>

  </div>
  );
}
