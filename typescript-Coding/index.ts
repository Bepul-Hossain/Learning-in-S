function canCompleteCircuit(A: number[], B: number[]): number {
    let n = A.length;
    for (let i = 0; i < n; i++) {
        let amountOfGas = A[i];
        let neededAmountGas = B[i];
        let currentAmountGas = amountOfGas - neededAmountGas;
        if (currentAmountGas >= 0) {
            let count = 0;
            for (let j = i; j < n; j++) {
                currentAmountGas = A[j] + currentAmountGas - B[j];
                if (currentAmountGas < 0) {
                    break;
                } else {
                    count++;
                }
            }
            for (let k = 0; k < i; k++) {
                currentAmountGas = A[k] + currentAmountGas - B[k];
                if (currentAmountGas < 0) {
                    break;
                } else {
                    count++;
                }
            }
            if (count >= n) {
                console.log(n);
                
                return i;
            }
        }
    }
    return -1;
}

console.log(canCompleteCircuit(
    [959, 329, 987, 951, 942, 410, 282, 376, 581, 507, 546, 299, 564, 114, 474, 163, 953, 481, 337, 395, 679, 21, 335, 846, 878, 961, 663, 413, 610, 937, 32, 831, 239, 899, 659, 718, 738, 7, 209],
    [862, 783, 134, 441, 177, 416, 329, 43, 997, 920, 289, 117, 573, 672, 574, 797, 512, 887, 571, 657, 420, 686, 411, 817, 185, 326, 891, 122, 496, 905, 910, 810, 226, 462, 759, 637, 517, 237, 884]
));
