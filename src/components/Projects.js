import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactImg from "../images/react.jpg";
import data from "./dataProjects";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Projects() {
  const [projects, setProjects] = useState(data);
  const [index, setIndex] = useState(0);
  console.log(projects);

  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper id="projects" className="section">
      <h2 className="subheading">projects.</h2>
      <div className="section-center">
        {projects.map((projectName, projectIndex) => {
          const { id, image, project, url } = projectName;

          let position = "nextSlide";
          if (projectIndex === index) {
            position = "activeSlide";
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projects.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={project} className="project-img" />
              <h4>{project}</h4>
              <button className="view-project">
                <a href={url} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </button>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
      <img src={ReactImg} alt="react" className="project_img" />
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.section`
  padding: 50px 0;

  .section {
    width: 90vw;
    margin: 5rem auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }

  .project-img {
    margin-bottom: 1rem;
    width: 100%;
    height: 160px;
    object-fit: cover;
    border: 2px solid #20555b;
  }

  h4 {
    font-size: 25px;
  }

  .view-project {
    background-color: #20555b;
    border: none;
    padding: 10px 15px;
    margin-top: 20px;

    a {
      color: #fff;
      font-size: 16px;
      font-family: "Gotu", sans-serif !important;
    }
  }

  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: #20555b;
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .prev:hover,
  .next:hover {
    background: #ba5d2c;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }

  .project_img {
    height: auto;
    width: 100%;
    background-position: center;
    object-fit: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: 800px) {
    .project-img {
      width: 340px;
    }

    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }

    .project_img {
      height: 350px;
    }
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
  }

  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
`;
