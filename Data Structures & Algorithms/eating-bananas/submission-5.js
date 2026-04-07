class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    let left = 1;
    let right = 1000000000; // Hardcoded max boundary
    let minSpeed = right;

    while (left <= right) {
      let midSpeed = Math.floor((left + right) / 2);
      
      // MUST reset to 0 every time we test a new speed
      let hoursNeeded = 0;

      for (let i = 0; i < piles.length; i++) {
        hoursNeeded += Math.floor((piles[i] + midSpeed - 1) / midSpeed);
      }

      if (hoursNeeded <= h) {
        // This speed works! Save it, then try to go even slower
        minSpeed = midSpeed;
        right = midSpeed - 1; 
      } else {
        // This speed is too slow (takes too many hours), go faster
        left = midSpeed + 1; 
      }
    }

    return minSpeed;
  }
}
