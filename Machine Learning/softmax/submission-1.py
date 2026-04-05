import numpy as np
from numpy.typing import NDArray


class Solution:

    def softmax(self, z: NDArray[np.float64]) -> NDArray[np.float64]:
        # z is a 1D NumPy array of logits
        # Hint: subtract max(z) for numerical stability before computing exp
        # return np.round(your_answer, 4)
        shifted_x = z - np.max(z)
    
        # Take e^ for the shifted elements
        exps = np.exp(shifted_x)
        
        # Divide by the sum of exponentials
        return np.round(exps / np.sum(exps), 4)