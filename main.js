// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
  };
};

// created factory function pAequorFactory() that returns object with properties specimenNum and dna
// used Math.floor to get random index in dna array
// returnRandBase() to generate new base that s different from current base
// replaced base
// Returned modified dna array
