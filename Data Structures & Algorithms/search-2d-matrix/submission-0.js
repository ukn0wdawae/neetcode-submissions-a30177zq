class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    // 1. Get the dimensions of the matrix
    const rows = matrix.length;
    const cols = matrix[0].length;

    // 2. Set the boundaries for our imaginary 1D array
    let left = 0;
    let right = rows * cols - 1; 

    // 3. Start standard binary search
    while (left <= right) {
      // Find the middle of our imaginary 1D array
      let mid = Math.floor((left + right) / 2);

      // 4. Translate 1D 'mid' into 2D coordinates!
      let row = Math.floor(mid / cols);
      let col = mid % cols;

      // 5. Look up the value in the actual 2D matrix
      let midValue = matrix[row][col];

      // 6. Compare and adjust pointers
      if (midValue === target) {
        return true; // We found it!
      } else if (midValue < target) {
        left = mid + 1; // Target is bigger, cut away the left half
      } else {
        right = mid - 1; // Target is smaller, cut away the right half
      }
    }

    // 7. If the loop ends, the target isn't in the matrix
    return false;
  }
}
