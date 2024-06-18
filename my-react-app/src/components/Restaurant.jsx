import data from "../components/restaurant";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useState } from "react";
export default function Restaurant() {
  const restaurants = data;
  const [filtered, setFiltered] = useState(data);
  const [searchInput, setSearchInput] = useState("");
  const [ratingInput, setRatingInput] = useState(0);
  function handleFilter(s, r) {
    if (s === null) {
      if (searchInput !== "" && ratingInput === 0) {
        setFiltered(
          restaurants.filter((res) =>
            res.name.toLowerCase().includes(searchInput.toLowerCase())
          )
        );
      } else if (searchInput === "" && ratingInput > 0) {
        setFiltered(restaurants.filter((res) => res.rating >= r.target.value));
      } else {
        setFiltered(
          restaurants.filter(
            (res) =>
              res.rating >= r.target.value &&
              res.name.toLowerCase().includes(searchInput.toLowerCase())
          )
        );
      }
    }
    if (r === null) {
      if (searchInput !== "" && ratingInput === 0) {
        setFiltered(
          restaurants.filter((res) =>
            res.name.toLowerCase().includes(s.target.value.toLowerCase())
          )
        );
      } else if (searchInput === "" && ratingInput > 0) {
        setFiltered(restaurants.filter((res) => res.rating >= ratingInput));
      } else {
        setFiltered(
          restaurants.filter(
            (res) =>
              res.rating >= ratingInput &&
              res.name.toLowerCase().includes(s.target.value.toLowerCase())
          )
        );
      }
    }
  }

  return (
    <div className="restaurantContainer">
      <div className="searchRes">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleFilter(e, null);
          }}
          className="border-2 border-black rounded"
          style={{
            height: "2.5rem",
            width: "15rem",
            fontSize: "1.2rem",
            padding: "1rem",
          }}
          placeholder="Search Restaurant"
        />
        <div style={{ fontSize: "1.2rem" }}>
          Minimun Rating:
          <input
            type="number"
            value={ratingInput}
            max={5}
            min={0}
            className="border-2 border-black rounded"
            onChange={(e) => {
              setRatingInput(e.target.value);
              handleFilter(null, e);
            }}
            style={{
              marginLeft: "1rem",
              height: "2.5rem",
              width: "5rem",
              fontSize: "1.2rem",
              padding: "1rem",
            }}
          />
        </div>
      </div>
      <div className="allRestaurant">
        {filtered.map((data, index) => {
          return (
            <div key={index} className="restaurant">
              <div className="top">
                <div className="rating">
                  <h2>{data.name}</h2>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={data.rating}
                    readOnly
                  />
                </div>
                <div className="address">
                  <LocationOnIcon />
                  <p>{data.address}</p>
                </div>
                <p className="code">
                  {data.outcode} {data.postcode}
                </p>
              </div>
              <div className="bottom">
                <p
                  style={{
                    color: "#23C45E",
                    fontSize: "1.2rem",
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <RestaurantIcon /> {data.type_of_food}
                </p>
                <p>
                  <a style={{ color: "blue" }} href={data.URL} target="_blank">
                    Visit Menu
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
