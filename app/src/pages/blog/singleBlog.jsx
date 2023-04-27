import React from "react";
import Layout from "../../../components/layout/Layout";
import Title from "../../../components/atoms/Title";
import BlogList from "../../../components/organisms/BlogList";

function singleBlog() {
  const data = {
    title: "De la învățat mecanic la gândire critică",
    image: "/images/sampleImage.png",
    paras: [
      "Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals. Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.",
      "Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.",
      "Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals. Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.",
      "Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.Coursessor is an ed-tech company that connects teachers and learners and offers the latest AI tech applied in education, using the power of Generative models and custom deep learning models to help students achieve their goals.",
    ],
  };
  const other = [
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
      linkText: "Citeste mai mult",
    },
    {
      imageLink: "/images/sampleImage.png",
      heading: "De la învățat mecanic la gândire critică",
      content:
        "Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea.",
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
