/* eslint-disable linebreak-style */
/* eslint-disable no-extra-semi */
export default function sortingTheTeam(data) {
  return data.sort((a, b) => parseFloat(b.health) - parseFloat(a.health));
};
