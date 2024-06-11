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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis eum minus ullam error illo cupiditate aperiam fugit ab, ut unde aliquid non natus a animi dolorum suscipit beatae fuga minima? Quas quasi provident sit aliquid! Quod, eos exercitationem laboriosam maxime veniam quae blanditiis! Corporis repellat, eligendi cupiditate possimus voluptate laborum eius saepe mollitia minima nisi culpa pariatur sequi veritatis deleniti quo? Earum, debitis eum sunt molestias harum placeat laudantium incidunt quis ipsam fugiat iste corporis dignissimos aspernatur asperiores dolores tenetur cumque iusto nobis est modi, adipisci sint? Culpa nihil temporibus maiores qui eligendi iure necessitatibus veniam? Autem, labore neque enim cupiditate qui asperiores culpa ullam iure. Corrupti temporibus molestias non vitae! Voluptate veniam eum nulla rem consectetur aperiam fugit velit deleniti ullam neque accusamus odit fugiat quos nisi ad et, eius facere a dolores. Esse consectetur delectus cum dicta ducimus aliquid rem porro voluptatibus, exercitationem sint laborum atque non, reiciendis quisquam accusantium unde iure neque commodi. Animi adipisci reprehenderit consequatur impedit itaque maiores dolorum velit mollitia corrupti ducimus dolore quam, numquam nemo nihil unde distinctio, repudiandae recusandae inventore aperiam. Totam, dolorem repellendus. Iusto numquam tenetur reprehenderit voluptatibus deserunt, consectetur corporis quidem, atque dolorem quasi quam autem eaque commodi quae.
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
