import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={
      "Haofei's personal website. "
      + 'UNC Research Assistant Professor. '
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">
              <img
                src={`${PUBLIC_URL}/images/about-this-site.png`}
                alt="About this site"
                style={{
                  width: '600px',
                  height: '300px',
                  display: 'block',
                  margin: '0 auto',
                }} // Center the image
              />
            </Link>
          </h2>
          <p style={{ textAlign: 'center' }}>
            Beautiful and Matured Cardiomyocytes of mouse heart at Postnatal Day 21
          </p>
        </div>
      </header>
      <section>
        <h3>Featured Publications</h3>
        <ul>
          <li>
            <a href="https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.121.055738" style={{ fontSize: '1.2em' }}>
              Epigenetic Regulation of Cardiomyocyte Maturation by Arginine
              Methyltransferase CARM1. Circulation. (2024)
            </a>
            <p>
              Garbutt, T. A., Wang, Z., <strong>Wang, H.</strong>, Ma, H., Ruan, H., Dong, Y.,
              Xie, Y., Tan, L., Phookan, R., Stouffer, J. A., Vedantham, V., Yang, Y.,
              Qian, L., & Liu, J. <em>co-first author</em>
            </p>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S1934590922003836?via%3Dihub" style={{ fontSize: '1.2em' }}>
              Cross lineage potential of Ascl1 uncovered by comparing diverse reprogramming
              regulatomes. Cell stem cell. (2022)
            </a>
            <p>
              <strong>Wang, H.</strong>, Keepers, B., Qian, Y., Xie, Y., Colon, M., Liu, J.,
              & Qian, L.
            </p>
          </li>
          <li>
            <a href="https://www.jmcc-online.com/article/S0022-2828(21)00174-7/abstract" style={{ fontSize: '1.2em' }}>
              Delineating chromatin accessibility re-patterning at single cell level
              during early stage of direct cardiac reprogramming. JMCC. (2022)
            </a>
            <p>
              <strong>Wang, H.</strong>, Yang, Y., Qian, Y., Liu, J., & Qian, L.
            </p>
          </li>
          <li>
            <a href="https://www.cell.com/cell-reports/fulltext/S2211-1247(20)31298-5?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2211124720312985%3Fshowall%3Dtrue" style={{ fontSize: '1.2em' }}>
              Defining Essential Enhancers for Pluripotent Stem Cells Using a Features
              Oriented CRISPR Cas9 Screen. Cell reports. (2020)
            </a>
            <p>
              <strong>Wang, H. F.</strong>, Warrier, T., Farran, C. A., Zheng, Z. H.,
              Xing, Q. R., Fullwood, M. J., Zhang, L. F., Li, H., Xu, J., Lim, T. M., & Loh, Y. H.
            </p>
          </li>
        </ul>
      </section>
    </article>
  </Main>
);

export default Index;
