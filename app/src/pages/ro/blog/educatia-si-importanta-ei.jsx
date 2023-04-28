import React from "react";
import Layout from "../../../../components/layout/Layout";
import Title from "../../../../components/atoms/Title";
import BlogList from "../../../../components/organisms/BlogList";


function singleBlog() {
  const data = {
    title: "Educatia si importanta ei",
    image: "https://coursessor.imgix.net/man-opened-magic-book-with-growing-lights-magic-powder-learning-education-concept.jpg?auto=format",
    paras: [
      "Educația reprezintă un aspect crucial al vieții noastre. Este procesul de dobândire a cunoștințelor, abilităților, valorilor și atitudinilor necesare pentru creșterea, dezvoltarea și succesul personal. Educația nu se limitează la sala de clasă, ci cuprinde toate aspectele vieții.",
      "Ea ne echipează cu abilități de gândire critică, abilități de rezolvare a problemelor și capacitatea de a lua decizii informate. Educația este esențială pentru o carieră de succes și o viață împlinită.",
      "Educația este, de asemenea, un drept fundamental al omului. Toată lumea ar trebui să aibă acces la o educație de calitate. Educația este esențială pentru reducerea sărăciei, promovarea dezvoltării durabile și obținerea unei calități mai bune a vieții.",
      "În lumea de astăzi, educația a devenit mai importantă ca niciodată. Abilitățile necesare pentru a reuși la locul de muncă evoluează constant, iar educația joacă un rol esențial în dobândirea acestora.",
      "În concluzie, educația este o parte esențială a vieții noastre. Ne oferă cunoștințele și abilitățile necesare pentru succesul profesional. Educația este un drept al omului care ar trebui să fie accesibil tuturor și este crucială pentru a crea un viitor mai bun pentru noi înșine și pentru generațiile viitoare.",
    ],
  };
  const other = [
    {
      imageLink: "https://coursessor.imgix.net/3d-render-abstract-background-with-brain-that-surrounded-with-particles-with-twisted-trails-trails-particles-are-symoizing-ideas.jpg?auto=format",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Ce este si cum o putem folosi",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "https://coursessor.imgix.net/1586193_11831.jpg?auto=format",
      heading: "Inteligenta in viata noastra",
      content:
        "Ce insemna sa fii inteligent si cum iti poti dezvolta inteligenta",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "https://coursessor.imgix.net/bw-greek-statue-image-torn-paper-style-remixed-media (1).jpg?auto=format",
      heading: "Imaginatia in viata noastra",
      content:
        "Imaginatia este un dar pe care toti oamenii il au atunci cand se nasc insa din nefericire unii dintre noi il pierd.",
      linkText: "Citeste mai mult",
    },
  ];
  return (
    <Layout>
      <div className="w-[90%] mx-auto mt-10">
        <Title titleClass="text-center">{data.title}</Title>
        <div className="w-[70%] mx-auto">
          <img
            src={data.image}
            alt=""
            className="w-full aspect-[16/9] mx-auto mt-10 object-cover outline outline-1 outline-[#6CE9BC]"
          />
          {data.paras.map((elem, index) => {
            return (
              <>
                <p key={index} className="mt-10 mx-auto">
                  {elem}
                </p>
              </>
            );
          })}
          <Title titleClass="mt-10">Other</Title>
          <BlogList className="grid-cols-1 md:grid-cols-3 mx-auto" data={other}/>
        </div>
      </div>
    </Layout>
  );
}

export default singleBlog;
