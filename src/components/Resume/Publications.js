import React from 'react';
import PropTypes from 'prop-types';

const Publications = ({ data }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title" style={{ textAlign: 'center' }}>
      <h3>Publications</h3>
    </div>
    <ul>
      {data.map((publication) => (
        <li key={publication.title}>
          <a href={publication.link} target="_blank" rel="noopener noreferrer">
            {publication.title}
          </a>
          <p dangerouslySetInnerHTML={{ __html: publication.authors }} />
        </li>
      ))}
    </ul>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a href=" https://www.ncbi.nlm.nih.gov/myncbi/16eajouxndmMjf/bibliography/public/" target="_blank" rel="noopener noreferrer">
        Click Here for NCBI Bibliography
      </a>
    </div>
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      authors: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Publications;
