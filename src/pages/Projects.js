// import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Projects/ProjectCard';
// import data from '../data/projects';

import React, { useState, useEffect, useCallback } from 'react';
// import Container from "react-bootstrap/Container";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Row from "react-bootstrap/Row";
import ProjectCard from '../components/Projects/ProjectCard';
import axios from 'axios';

const API = 'https://api.github.com';

const Projects = () => {
  const username = 'sarbjot-14';
  const specific = [];

  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specificReposAPI = `${API}/repos/${username}`;

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = response.data; //[...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specific) {
          //console.warn(`${specificReposAPI}/${repoName}`);
          const response = await axios.get(`${specificReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <div>
      <Main
        title="Projects"
        description="Learn about Sarbjot Singhs's projects."
      >
        <article className="post" id="projects">
          <header>
            <div className="title">
              <h2 data-testid="heading">
                <Link to="/projects">Projects</Link>
              </h2>
              <p>A selection of projects that I&apos;m not too ashamed of</p>
            </div>
          </header>

          {projectsArray.length ? (
            projectsArray.map((project, index) => (
              // <h1>{project.name}</h1>
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
          ) : (
            <h3>Loading...</h3>
          )}
        </article>
      </Main>
    </div>
  );
};
export default Projects;
