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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae eos repudiandae ullam pariatur! Quam architecto, perferendis officiis porro ducimus voluptatem dolor earum eaque optio minima, laboriosam ullam minus esse eveniet unde excepturi magnam iusto quisquam quia cupiditate neque nemo! Beatae numquam eveniet iusto placeat sequi quo officiis ipsum error, fugit hic porro aliquid culpa assumenda facere dicta. Error explicabo consequatur similique recusandae, itaque corporis odio fugiat deleniti voluptatibus expedita illum temporibus sunt et quisquam nihil blanditiis repudiandae quis! Non doloribus, accusamus nesciunt minus in modi temporibus. Assumenda reprehenderit sapiente illum blanditiis reiciendis. Explicabo non est molestias, ducimus magnam sapiente quam voluptate, dignissimos corporis vitae quo eveniet error accusamus nemo rem beatae ad debitis libero ipsum sit eum? Nobis, perferendis temporibus eius repellat iure nemo tenetur nesciunt culpa alias eveniet quibusdam veritatis repellendus consequuntur magni cum saepe velit corrupti necessitatibus deleniti quaerat rem, cumque consectetur voluptas aliquid! Maiores praesentium repudiandae laborum quibusdam suscipit nisi et eaque itaque, eius inventore ex, magnam modi ducimus optio provident odit? Reprehenderit ipsa molestiae, sapiente tempora dolor ratione consequatur mollitia! Veritatis minus incidunt a recusandae ipsum voluptates ex? Est minima tempora, consectetur ratione facere iste similique hic ab fugiat dicta omnis explicabo, modi eaque harum porro deleniti incidunt praesentium ullam! Quis harum distinctio minima nobis nulla voluptatibus, hic repellendus, amet delectus, dolore non enim quod tempore architecto deleniti itaque corporis? Pariatur recusandae sint dolor ratione necessitatibus sunt eligendi, consequatur asperiores possimus ipsum ducimus sit hic culpa beatae ullam tenetur. Officia cupiditate eveniet reprehenderit quia a earum! Dolores facilis vel voluptas, odio quibusdam ratione harum qui amet eaque non voluptatum nulla veritatis cumque voluptatibus debitis. Ratione voluptatem placeat quod quis sunt nihil nemo laboriosam eos, illum temporibus vitae enim quidem vel beatae corrupti saepe perferendis nesciunt consequatur at laudantium assumenda alias commodi magni eius? Quisquam ullam doloremque ducimus est harum omnis, vel excepturi dicta quia eligendi impedit repellendus beatae quidem incidunt minima blanditiis sint consequuntur velit sed in officiis eius nostrum, quo quae. Voluptatibus sed, expedita veritatis ipsam rerum neque est excepturi voluptate incidunt quia aliquid, animi omnis? Sint ea placeat ipsam cupiditate fugiat molestias magnam dolor cumque officia, totam voluptate, dicta temporibus officiis ad, consequatur accusamus necessitatibus recusandae nihil dolorem. Laboriosam enim veniam ullam asperiores officia, iusto aut laborum. Quibusdam vel dolore aspernatur pariatur nisi ratione voluptate veritatis ipsa, repudiandae quae numquam sed minima excepturi quisquam saepe atque tempore. Et fuga enim consequatur quis vel vitae totam placeat, odio inventore atque eos distinctio velit repellendus hic deleniti itaque aut, ipsum, iure aspernatur omnis aliquam esse officia magnam ratione? Dolorum perferendis eius, et esse ex quia ducimus reiciendis vitae illo ratione consequuntur asperiores voluptatem excepturi itaque nam vero voluptatibus tempore dignissimos, unde sunt, qui sint omnis velit dolore? Consequatur aliquam hic magnam tempora asperiores itaque, est sint error eaque ipsa aut. Illum ab, cumque incidunt necessitatibus nam reiciendis asperiores ea corrupti, id harum a deleniti quae consequuntur reprehenderit architecto odit velit ex maxime veritatis consequatur rem pariatur esse quibusdam? Architecto minima reiciendis sequi debitis omnis id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRightSide;
