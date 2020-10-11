import React, { Fragment } from "react";

const Social = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <a
          className="button"
          href="https://www.linkedin.com/in/edisson-alexander-ruiz-6090b1129/"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          <div className="icon">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <span>Linkedin</span>
        </a>
        <a
          className="button"
          href="https://github.com/EdissonRuiz78"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          <div className="icon">
            <i class="fab fa-github"></i>
          </div>
          <span>Github</span>
        </a>
        <a
          className="button"
          href="https://www.hackerrank.com/edalruiz"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          <div className="icon">
            <i class="fab fa-hackerrank"></i>
          </div>
          <span>HackerRank</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Social;
