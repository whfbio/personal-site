/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'University of North Carolina at Chapel Hill',
    position: 'Research Assistant Professor',
    startDate: '2023-07-01',
  },
  {
    name: 'University of North Carolina at Chapel Hill',
    position: 'Postdoctoral Fellow',
    startDate: '2019-03-01',
    endDate: '2023-07-01',
  },
  {
    name: 'Institute of Molecular and Cell Biology',
    position: 'Postdoctoral Fellow',
    url: 'http://skepticalinvestments.biz',
    startDate: '2018-02-01',
    endDate: '2019-01-01',
  },
];

export default work;
