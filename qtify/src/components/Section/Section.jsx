import React, { useState } from "react";
import Styles from "./Section.module.css";
import AlbumCard from "../Card/AlbumCard";
import Carousel from "../Carousel/Carousel";

function Section({ type, title, data }) {
  const [toggler, setToggler] = useState(false);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.sectionTop}>
        {title}
        <h4 onClick={() => setToggler(!toggler)} className={Styles.toggler}>
          {toggler ? "Collapse" : "Show all"}
        </h4>
      </div>

      <div>
        {toggler ? (
          <div className={Styles.flexWrappers}>
            {data.map((album) => {
              return <AlbumCard album={album} key={album.id} type={type}/>;
            })}
          </div>
        ) : (
          <div>
            <Carousel data={data} type={type}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
