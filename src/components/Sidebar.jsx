import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-slate-200 dark:bg-gray-800 dark:text-white w-60 p-4 m-2">
      <ul>
        <li className="flex gap-2 p-4 text-xs">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
            className="w-4 h-4"
          />{" "}
          Dashboard
        </li>
        <li className="flex gap-2 p-4 text-xs">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4738/4738879.png"
            className="w-4 h-4"
          />{" "}
          Games
        </li>
        <li className="flex gap-2 p-4 text-xs">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10278/10278992.png"
            className="w-4 h-4"
          />{" "}
          Video & Movies
        </li>
        <li className="flex gap-2 p-4 text-xs">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2989/2989838.png"
            className="w-4 h-4"
          />{" "}
          Streaming
        </li>
        <li className="flex gap-2 p-4 text-xs">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6748/6748737.png"
            className="w-4 h-4"
          />{" "}
          Watchlist
        </li>
        <li className="flex gap-2 p-4 text-xs">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8089/8089429.png"
            className="w-4 h-4"
          />{" "}
          Coming Soon
        </li>
      </ul>
      <h5 className="text-[0.70rem] font-bold dark:text-gray-300">
        Favorite Streamers
      </h5>
      <div className="flex justify-evenly gap-2 py-4">
        <img
          className="w-6 h-6"
          src="https://cdn-icons-png.flaticon.com/128/10238/10238346.png"
        />
        <img
          className="w-6 h-6"
          src="https://cdn-icons-png.flaticon.com/128/6162/6162025.png"
        />
        <img
          className="w-6 h-6"
          src="https://cdn-icons-png.flaticon.com/128/686/686751.png"
        />
        <img
          className="w-6 h-6"
          src="https://cdn-icons-png.flaticon.com/128/16000/16000326.png"
        />
      </div>
      <h5 className="text-[0.70rem] font-bold dark:text-gray-300">
        Top categories
      </h5>
      <ol className="gap-2">
        <li className="text-xs p-1.5 px-5 dark:text-gray-300">
          <span className="text-blue-500 pr-2">●</span>Games
        </li>
        <li className="text-xs p-1.5 px-5 dark:text-gray-300">
          <span className="text-green-500 pr-2">●</span>Shooters
        </li>
        <li className="text-xs p-1.5 px-5 dark:text-gray-300">
          <span className="text-orange-500 pr-2">●</span>Podcast
        </li>
        <li className="text-xs p-1.5 px-5 dark:text-gray-300">
          <span className="text-blue-500 pr-2">●</span>Movie
        </li>
        <li className="text-xs p-1.5 px-5 dark:text-gray-300">
          <span className="text-red-500 pr-2">●</span>Cricket
        </li>
        <li className="text-xs p-1.5 px-5 dark:text-gray-300">
          <span className="text-green-500 pr-2">●</span>Education
        </li>
      </ol>
    </div>
  );
};

export default Sidebar;
