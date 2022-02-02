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
  const {
    name,
    description,
    svn_url,
    // stargazers_count,
    languages_url,
    pushed_at,
  } = value;
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
    // <Col md={6}>
    //   <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
    //     <Card.Body>
    //       <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
    //       <Card.Text>{(!description)?"":description || <Skeleton count={3} />} </Card.Text>
    //       {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
    //       <hr />
    //       {languages_url ? (
    //         <Language languages_url={languages_url} repo_url={svn_url} />
    //       ) : (
    //         <Skeleton count={3} />
    //       )}
    //       {value ? (
    //         <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
    //       ) : (
    //         <Skeleton />
    //       )}
    //     </Card.Body>
    //   </Card>
    // </Col>
  );
};

// const CardButtons = ({ svn_url }) => {
//   return (
//     <>
//       <a
//         href={`${svn_url}/archive/master.zip`}
//         className="btn btn-outline-secondary mr-3"
//       >
//         <i className="fab fa-github" /> Clone Project
//       </a>
//       <a href={svn_url} target=" _blank" className="btn btn-outline-secondary">
//         <i className="fab fa-github" /> Repo
//       </a>
//     </>
//   );
// };

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

// const CardFooter = ({ star_count, repo_url, pushed_at }) => {
//   const [updated_at, setUpdated_at] = useState("0 mints");

//   const handleUpdatetime = useCallback(() => {
//     const date = new Date(pushed_at);
//     const nowdate = new Date();
//     const diff = nowdate.getTime() - date.getTime();
//     const hours = Math.trunc(diff / 1000 / 60 / 60);

//     if (hours < 24) {
//       if (hours < 1) return setUpdated_at("just now");
//       let measurement = hours === 1 ? "hour" : "hours";
//       return setUpdated_at(`${hours.toString()} ${measurement} ago`);
//     } else {
//       const options = { day: "numeric", month: "long", year: "numeric" };
//       const time = new Intl.DateTimeFormat("en-US", options).format(date);
//       return setUpdated_at(`on ${time}`);
//     }
//   }, [pushed_at]);

//   useEffect(() => {
//     handleUpdatetime();
//   }, [handleUpdatetime]);

//   return (
//     <p className="card-text">
//       <a
//         href={repo_url + "/stargazers"}
//         target=" _blank"
//         className="text-dark text-decoration-none"
//       >
//         <span className="text-dark card-link mr-4">
//           <i className="fab fa-github" /> Stars{" "}
//           <span className="badge badge-dark">{star_count}</span>
//         </span>
//       </a>
//       <small className="text-muted">Updated {updated_at}</small>
//     </p>
//   );
// };

export default ProjectCard;
