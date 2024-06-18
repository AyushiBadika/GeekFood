import { useEffect, useRef, useState } from "react";

import axios from "axios";

export default function Food() {
  const [query, setQuery] = useState("chicken");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=da84d3cb&app_key=07766072aed6038895f0acbed0418547`;
  const [foodItems, setFoodItems] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const queryInput = useRef();

  useEffect(() => {
    setIsLoading(true);
    setFoodItems([]);
    async function fecthData() {
      const res = await axios(url);

      await setFoodItems(res.data.hits);
      setIsLoading(false);
    }
    fecthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleQueryChange = () => {
    setQuery(queryInput.current.value);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-32 mb-8 w-1/2  text-center">
        <input
          className="border-2 border-black w-1/2 mr-4 rounded px-4 py-2"
          ref={queryInput}
          value={value}
          placeholder="Search Recepie"
          onChange={(e) => setValue(e.currentTarget.value)}
        ></input>
        <button
          className="px-4 py-[0.6rem] bg-blue-700 text-white font-bold rounded"
          onClick={handleQueryChange}
        >
          Search Food
        </button>
      </div>
      {isLoading ? <div className="loader my-8"></div> : ""}

      <div className="flex flex-wrap justify-center gap-8 p-8">
        {foodItems.length > 0 &&
          foodItems.map((foodItem, index) => {
            return (
              <a
                key={index}
                href={foodItem.recipe.url}
                target="_blank"
                className="rounded-md flex flex-col items-center shadow-lg"
              >
                <img src={foodItem.recipe.image} className="rounded-md " />
                <p className=" h-12 my-4 text-center w-3/4 ">
                  {foodItem.recipe.label}
                </p>
              </a>
            );
          })}
      </div>
    </div>
  );
}
