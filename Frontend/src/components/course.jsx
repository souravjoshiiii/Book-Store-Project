import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./cards";

function Course() {
  const [books, setBooks] = useState([]); // Renamed state for better readability

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4008/book"); // Await the axios call
        console.log(res.data); // Log the data for debugging
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBooks();
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="max-w-screen-2x1 container mx-auto md:px-17 px-4 dark:bg-slate-900 dark:text-white">
      <div className="mt-28 items-center text-center justify-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">here!!</span>
        </h1>
        <p className="mt-10">
          Here!! you can see all the paid and free books provided by your own
          renowned university. You will be getting all your academic books here
          for free and all your favorite novels and daily magazines at minimal
          prices.
        </p>
        <button className="mt-4 px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-700 duration-300">
          Back
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map((item) => (
          <Cards item={item} key={item._id || item.id} /> // Ensure unique key
        ))}
      </div>
    </div>
  );
}

export default Course;
