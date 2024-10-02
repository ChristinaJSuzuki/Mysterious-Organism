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
    compareDNA(otherPAequor) {
      let identicalCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          identicalCount++;
        }
      }
      const percentage = (identicalCount / this.dna.length) * 100;
      console.log(
        `specimen #${this.specimenNum} and specimen #${
          otherPAequor.specimenNum
        } have ${percentage.toFixed(2)}% DNA in common`
      );
    },
  };
};

// created factory function pAequorFactory() that returns object with properties specimenNum and dna
// used Math.floor to get random index in dna array
// returnRandBase() to generate new base that s different from current base
// replaced base
// Returned modified dna array
// iterated through DNA using loop to compare each base in the dna array of the current object with the corresponding base in the passed-in object’s dna
// kept count of how many bases are identical and in the same position
// calculated percentage by dividing count of identical bases by the total number of bases and multiply by 100
// console.log() printed the percentage of DNA in common, including the specimenNum of both objects
