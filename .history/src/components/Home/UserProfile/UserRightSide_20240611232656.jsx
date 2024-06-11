import React from "react";
import "../../../style/UserProfile/UserRightSide.css";
import { useState } from "react";

const UserRightSide = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="right_side">
      <div className="cards_infos">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Publications
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Offres d'emplois
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>Publications</h2>
          <hr />
          <div className="card">
            <div className="cardContent">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Offres d'emplois</h2>
          <hr />
          <div className="card">
            <div className="cardContent">
              <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus hic est dolor unde ipsa reiciendis earum at neque maxime, vel quo ab necessitatibus soluta, beatae, fugit magni ipsum quaerat inventore id ratione laborum dolorum tempora voluptatibus? Expedita libero temporibus repellendus quae tempora delectus error minus similique eius saepe, aperiam nulla, praesentium quos optio. Velit, exercitationem ducimus, quae obcaecati suscipit sed saepe ratione error sapiente recusandae laborum consequatur blanditiis illo ullam quisquam quibusdam? Saepe nesciunt maiores ipsum eveniet recusandae officiis, cumque reprehenderit autem quis dicta minima explicabo facere? Nihil, suscipit laboriosam reprehenderit neque maiores nisi eum nam consequuntur itaque maxime minima voluptate molestiae voluptatem modi nulla nobis dolores, labore rerum sequi facilis dolorem, sunt dolorum. Rerum dicta quisquam impedit excepturi placeat accusantium illo blanditiis cumque eius, molestiae deleniti obcaecati? Veritatis ad dolore voluptatem quibusdam velit facere et quasi consectetur veniam doloribus ut aspernatur reprehenderit architecto blanditiis, nihil error? Quo, suscipit quia! Cupiditate tempore possimus adipisci illum animi similique non neque! Tenetur alias nihil accusantium nemo natus illum cum dolorem ea sit harum veritatis corrupti eaque, deserunt incidunt dolor est totam sed! Commodi porro veritatis, voluptate quia in vel saepe nam amet fugit hic, doloribus iste praesentium ducimus optio ratione culpa ullam!              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRightSide;
