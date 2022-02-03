import React, { useState, useEffect, useCallback } from 'react';
//import React from 'react';
import { Github } from 'react-bootstrap-icons';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Card from "react-bootstrap/Card";
// import Skeleton from "react-loading-skeleton";
import axios from 'axios';
import dayjs from 'dayjs';

const ProjectCard = ({ value }) => {
  const { name, description, svn_url, languages_url, pushed_at } = value;
  console.warn(description);
  return (
    <div className="cell-container">
      <article className="mini-post">
        <Row>
          <Col>
            <header>
              <h3>
                <a href={svn_url}>{name}</a>
              </h3>
              <time className="published">
                {dayjs(pushed_at).format('MMMM, YYYY')}
              </time>
            </header>
          </Col>
          <Col>
            <a id="github" href={svn_url} target=" _blank">
              <Github size={50} />
            </a>
          </Col>
        </Row>

        <div className="languages">
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <h3>VBA</h3>
          )}
        </div>

        <div className="description">
          <p>{description}</p>
        </div>
      </article>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }
  //Rust lighter,  Python lighter,Kotlin, Swift,
  const col = {
    JavaScript: '#40e0d0',
    C: '#fff68f',
    Python: '#FCDC3B',
    HTML: '#2F9599',
    Shell: '#ffa500',
    Dockerfile: '#0db7ed',
    Java: '#D0A384',
    Rust: '#C67171',
    CSS: '#99B898',
    CMake: '#B0A6A4',
    Dart: '#FFAA00',
    Kotlin: '#C8F526',
    Swift: '#CD5C5C',
  };
  console.warn(col['d']);

  //const colors = ["#ffc0cb","#ffa500","#40e0d0","#fff68f","#6B5B95","#88B04B","#92A8D1"]
  return (
    <div className="pb-3">
      Languages:{' '}
      {array.length
        ? array.map((language) => (
            <a
              key={language}
              // className="badge badge-light card-link"
              href={repo_url + `/search?l=${language}`}
              target=" _blank"
            >
              <span
                className="chip"
                style={{
                  backgroundColor: col[language] ? col[language] : '#92A8D1',
                }}
              >
                <p className="chip-content">
                  {language}:{' '}
                  {Math.trunc((data[language] / total_count) * 1000) / 10} %
                </p>
              </span>
            </a>
          ))
        : 'code yet to be deployed.'}
    </div>
  );
};


export default ProjectCard;
