import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Project2 = () => (
  <Main
    title="Postnatal Heart Development"
    description="Learn more about the Postnatal Heart Development project."
  >
    <article className="post" id="project2">
      <header>
        <div className="title">
          <h2><Link to="/projects/project2">Postnatal Heart Development</Link></h2>
          <p>Charting Postnatal Heart Development Using In Vivo Single-Cell Functional Genomics</p>
        </div>
      </header>
      <div style={{ textAlign: 'center' }}>
        <img src="/images/projects/heartatlas_scheme.png" alt="Postnatal Heart Atlas" width="800" height="350" />
      </div>
      <p>
        The transition at birth, marked by increased circulatory demands and rapid growth,
        necessitates extensive remodeling of the heart’s structure, function, and metabolism.
        This transformation requires precise spatial and temporal coordination among diverse
        cardiac cell types,
        yet the intrinsic and extrinsic regulatory mechanisms driving these changes remain
        incompletely understood.
        In this study, we generated a single-cell-resolution temporal and spatial atlas of
        postnatal hearts by coupling
        time-course single-nucleus RNA sequencing with in-situ single-cell spatial imaging analysis.
        Our integrative approach not only provided a spatial map of the postnatal heart’s
        transcriptome at the single-cell level
        but also unveiled the dynamic of localized intrinsic and extrinsic regulatory
        mechanisms driving postnatal heart development.
        To further interrogate these regulators’ function within the native cardiac
        environment in a high-throughput manner,
        we developed an in vivo Probe-based Indel-detectable Perturb-seq (PIP-seq) platform.
        Applying PIP-seq to postnatal cardiomyocyte maturation uncovered key regulatory
        nodal points underlying
        postnatal cardiomyocyte maturation.
        Through these efforts, we have not only created a single-cell-resolution temporal
        and spatial atlas of postnatal hearts
        but also demonstrated the functional importance of cell-cell communication during
        postnatal heart development.
        Importantly, our PIP-seq opens up new possibilities for research, no longer limiting to a
        single gene but allowing for exploring
        a network of genes’ function without sacrificing in vivo physiological context.
      </p>
    </article>
  </Main>
);

export default Project2;
