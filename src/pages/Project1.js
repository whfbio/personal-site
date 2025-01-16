import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Project1 = () => (
  <Main
    title="Direct Cardiac Reprogramming"
    description="Learn more about the Direct Cardiac Reprogramming project."
  >
    <article className="post" id="project1">
      <header>
        <div className="title">
          <h2><Link to="/projects/project1">A+M Driven Direct Cardiac Reprogramming</Link></h2>
          <p>A minimum cocktail that convert cardiac fibroblast to cardiomyocyte efficiently</p>
        </div>
      </header>
      <div style={{ textAlign: 'center' }}>
        <img src="/images/projects/am_scheme.jpg" alt="Direct Cardiac Reprogramming" width="600" height="600" />
      </div>
      <p>
        In this study, I compared the direct reprogramming of induced neurons (iN),
        induced hepatocytes (iHep), and induced cardiomyocytes (iCM) side by side.
        By analyzing the transcriptome and H3K27Ac epigenome of each reprogrammed cell type,
        I identified both shared and unique non-cocktail transcription factors (TFs)
        involved in the epigenetic remodeling during direct reprogramming.
      </p>
      <p>
        One key discovery was the unique ability of Ascl1 to drive efficient cardiac
        reprogramming when co-expressed with Mef2c. This Ascl1-Mef2c combination not only
        outperforms conventional reprogramming cocktails in terms of efficiency but is also
        compact enough to be delivered via a single AAV virus particle for in vivo applications.
        This makes Ascl1 + Mef2c highly promising for replenishing cardiomyocytes after heart
        injury through direct delivery.
      </p>
      <p>
        Conceptually, the cross-lineage potential of Ascl1 challenges the foundational principle
        of cellular reprogramming, which relies on using strictly lineage-specific factors to
        generate corresponding cell types. The discovery of more cross-lineage TFs like Ascl1
        may prompt a reevaluation of the relationship between direct reprogramming and
        developmental biology. This could open new possibilities for regenerative medicine and
        lead to more efficient reprogramming strategies for various cell types.
      </p>
    </article>
  </Main>
);

export default Project1;
