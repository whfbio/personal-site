const publications = [
  {
    title: 'Sox17 and Erg synergistically activate endothelial cell fate in reprogramming fibroblasts. Journal of Molecular and Cellular Cardiology. (2025)',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0022282824002025',
    authors: 'Farber, G., Takasugi, P., Ricketts, S., <strong>Wang, H.</strong>, Xie, Y., Farber, E., Liu, J. and Qian, L.',
  },
  {
    title: 'Epigenetic Regulation of Cardiomyocyte Maturation by Arginine Methyltransferase CARM1. Circulation. (2024)',
    link: 'https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.121.055738',
    authors: 'Garbutt, T. A.*, Wang, Z.*, <strong>Wang, H.</strong>*, Ma, H., Ruan, H., Dong, Y., ... & Liu, J. *co-first author',
  },
  {
    title: 'Decoding aging in the heart via single cell dual omics of non-cardiomyocytes. iScience. (2024)',
    link: 'https://www.cell.com/iscience/fulltext/S2589-0042(24)02696-8',
    authors: 'Song, Y., Wang, L., <strong>Wang, H.</strong>, Ma, H., Xu, J., Liu, J. and Qian, L.',
  },
  {
    title: 'Single-cell chromatin accessibility profiling identifies intrinsic genetic program that activates transient pro-regenerative cell states of major non-myocyte cell types. Science Advances. (2024)',
    link: 'https://www.science.org/doi/10.1126/sciadv.adk4694',
    authors: 'Dong, Y., Yang, Y., <strong>Wang, H.</strong>, … Liu, J.',
  },
  {
    title: 'Direct highly efficient endothelial reprogramming using Sox17-Erg. Nature Communications. (2024)',
    link: 'https://www.nature.com/articles/s41467-024-48354-6',
    authors: 'Farber, G., Wang, Q., Rathod, Mitesh., <strong>Wang, H.</strong>, …Qian, L.',
  },
  {
    title: 'Translational landscape of direct cardiac reprogramming reveals a role of Ybx1 in repressing cardiac fate acquisition. Nature Cardiovascular Research. (2023)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38524149/',
    authors: 'Xie, Y., Wang, Q., Yang, Y., Near, D., <strong>Wang, H.</strong>, Colon, M., ... & Qian, L.',
  },
  {
    title: 'Single-cell transcriptomics reveals maturation of transplanted stem cell–derived retinal pigment epithelial cells toward native state. Proceedings of the National Academy of Sciences. (2023)',
    link: 'https://www.pnas.org/doi/10.1073/pnas.2214842120',
    authors: 'Parikh, B. H., Blakeley, P., Regha, K., Liu, Z., Yang, B., Bhargava, M., ... <strong>Wang, H.</strong>, …& Su, X.',
  },
  {
    title: 'Optimized protocol for direct cardiac reprogramming in mice using Ascl1 and Mef2c. STAR Protoc. (2023)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36989109/',
    authors: '<strong>Wang, H.</strong>*, Keepers B, Liu J, Qian L.',
  },
  {
    title: 'Cross-lineage Potential of Ascl1 Uncovered by Comparing Diverse Reprogramming Regulatomes. Cell Stem Cell. (2022)',
    link: 'https://www.cell.com/cell-stem-cell/pdf/S1934-5909(22)00383-6.pdf',
    authors: '<strong>Wang, H.</strong>*, Keepers, B.*, Qian, Y.Z., Colon, M., Liu, J. and Qian, Li.',
  },
  {
    title: 'Delineating chromatin accessibility re-patterning at single cell level during early stage of direct cardiac reprogramming. Journal of Molecular and Cellular Cardiology. (2022)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/34509499/',
    authors: '<strong>Wang, H.</strong>, Yang, Y., Qian, Y., Liu, J. and Qian, L.',
  },
  {
    title: 'Direct Cell Reprogramming: approaches and mechanisms. Nature Reviews Molecular Cell Biology. (2021)',
    link: 'https://www.nature.com/articles/s41580-021-00335-z',
    authors: '<strong>Wang, H.F.</strong>*, Yang, Y.C.*, Liu, J.D., Qian, L.',
  },
  {
    title: 'Defining Essential Enhancers for Pluripotent Stem Cells Using a Features-Oriented CRISPR-Cas9 Screen. Cell reports. (2020)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33113365/',
    authors: '<strong>Wang, H.F.</strong>*, Warrier, T.*, Farran, C.A., Zheng, Z.H., Xing, Q.R., Fullwood, M.J., Zhang, L.F., Li, H., Xu, J., Lim, T.M. and Loh, Y.H.',
  },
  {
    title: 'Single-cell dual-omics reveals the transcriptomic and epigenomic diversity of cardiac non-myocytes. Cardiovascular Research. (2021)',
    link: 'https://academic.oup.com/cardiovascres/article/118/6/1548/6220323',
    authors: 'Wang, L., Yang, Y., Ma, H., Xie, Y., Xu, J., Near, D., <strong>Wang, H.</strong>, Garbutt, T., Li, Y., Liu, J. and Qian, L.',
  },
  {
    title: 'Down-regulation of Beclin1 promotes direct cardiac reprogramming. Science translational medicine. (2020)',
    link: 'https://www.science.org/doi/10.1126/scitranslmed.aay7856',
    authors: 'Wang, L., Ma, H., Huang, P., Xie, Y., Near, D., <strong>Wang, H.</strong>, Xu, J., Yang, Y., Xu, Y., Garbutt, T. and Zhou, Y.',
  },
  {
    title: 'A pilot study on microRNA profile in tear fluid to predict response to anti-VEGF treatments for diabetic macular edema. Journal of clinical medicine. (2020)',
    link: 'https://www.mdpi.com/2077-0383/9/9/2920',
    authors: 'Chan, H.W., Yang, B., Wong, W., Blakeley, P., Seah, I., Tan, Q.S.W., <strong>Wang, H.</strong>, Bhargava, M., Lin, H.A., Chai, C.H. and Mangunkusumo, E.A.',
  },
  {
    title: 'Systematic identification of factors for provirus silencing in embryonic stem cells. Cell. (2015)',
    link: 'https://www.cell.com/cms/10.1016/j.cell.2015.08.037/attachment/c869af4d-a055-441e-a694-ccab104c3cdf/mmc9.pdf',
    authors: 'Yang, B.X., Farran, C.A.E., Guo, H.C., Yu, T., Fang, H.T., <strong>Wang, H.F.</strong>, Schlesinger, S., Seah, Y.F.S., Goh, G.Y.L., Neo, S.P. and Li, Y.',
  },
  {
    title: 'RNAi reveals phase-specific global regulators of human somatic cell reprogramming. Cell reports. (2016)',
    link: 'https://www.sciencedirect.com/science/article/pii/S2211124716306477',
    authors: 'Toh, C.X.D., Chan, J.W., Chong, Z.S., <strong>Wang, H.F.</strong>, Guo, H.C., Satapathy, S., Ma, D., Goh, G.Y.L., Khattar, E., Yang, L. and Tergaonkar, V.',
  },
];

export default publications;
