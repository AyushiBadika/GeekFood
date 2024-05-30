/* eslint-disable react/prop-types */
import photo from "../assets/photo2.avif";
function GridCard({ text, name, position }) {
  return (
    <div className="card">
      <div className="text">{text}</div>
      <div className="nameBlock">
        <img
          src={photo}
          alt=""
          width={"50px"}
          height={"50px"}
          style={{ borderRadius: "50%" }}
        />
        <div>
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}
export default GridCard;
