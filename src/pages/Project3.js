import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Project3 = () => (
  <Main
    title="Carm1 regulate Cardiomyocyte maturation"
    description="Learn more about the epigenetic regulation of cardiomyocyte maturation."
  >
    <article className="post" id="project3">
      <header>
        <div className="title">
          <h2><Link to="/projects/project3">Epigenetic regulation of Postnatal Cardiomyocyte Maturation</Link></h2>
          <p>Carm1 regulates the cardiomyocyte maturation through H3R17me2a deposition</p>
        </div>
      </header>
      <div style={{ textAlign: 'center' }}>
        <img src="/images/projects/carm1_scheme.png" alt="Carm1 KO leads to reduced cardiomyocyte size" width="400" height="400" />
      </div>
      <p>
        Cardiomyocyte maturation is essential for the transition from fetal to adult
        heart muscle, involving significant changes in cellular architecture, metabolism,
        and function. In this study, together with my colleagues, I uncovered a novel role
        for CARM1, a histone H3R17 methyltransferase, in postnatal cardiomyocyte maturation.
        By performing ChIP-seq on postnatal hearts with Carm1 knockout, I demonstrated that
        CARM1 cooperates with cardiac transcription factors, particularly GATA4, to activate
        and maintain the cardiac muscle maturation program through H3R17me2a deposition. The
        GWAS analysis revealed a significant overlap between single nucleotide
        polymorphisms (SNPs) associated with cardiomyopathy, QT interval, and arrhythmia,
        and promoter and enhancer regions marked by H3R17me2a.
      </p>
      <p>
        This study highlights the critical role of arginine methylation in regulating
        cardiomyocyte maturation and heart development. Additionally, it adds an important
        piece to the regulatory network underlying cardiac maturation, emphasizing the role
        of arginine methylation. Identifying the regulators and pathways involved in
        cardiomyocyte maturation not only provides novel insights into congenital heart diseases
        but also guides strategies for generating more mature cardiomyocytes through
        differentiation or reprogramming, offering potential new treatment options
        for cardiac diseases.
      </p>
    </article>
  </Main>
);

export default Project3;
