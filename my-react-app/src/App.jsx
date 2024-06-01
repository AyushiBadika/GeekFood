// import { useState } from "react";

import HeroSection from "./components/HeroSection.jsx";
import HeroContent from "./components/HeroContent.jsx";
import Section1Image from "./components/Section1Image.jsx";
import Section1Content from "./components/Section1Content.jsx";
import GridCard from "./components/GridCard.jsx";

import "./App.css";

function App() {
  return (
    <>
      <HeroSection />
      <HeroContent />
      <div className="sideBySide">
        <Section1Image />
        <Section1Content />
      </div>

      <div className="gridCards">
        <div className="column">
          <GridCard
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
            }
            name="Gladis Lennon"
            position="Head of SEO"
          />
          <GridCard
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
            name="Gladis Lennon"
            position="Head of SEO"
          />
        </div>
        <div className="column">
          <GridCard
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt."
            }
            name="Gladis Lennon"
            position="Head of SEO"
          />
          <GridCard
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."
            name="Gladis Lennon"
            position="Head of SEO"
          />
        </div>
        <div className="column">
          <GridCard
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"
            name="Gladis Lennon"
            position="Head of SEO"
          />
          <GridCard
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."
            name="Gladis Lennon"
            position="Head of SEO"
          />
        </div>
      </div>
    </>
  );
}

export default App;
