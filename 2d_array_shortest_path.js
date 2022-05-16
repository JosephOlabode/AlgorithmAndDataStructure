/**
 * Given a 2D array containing -1's (walls), O's(gates) and
 * INF's (empty room). Fill each empty room with the number
 * of steps to the nearest gate
 * 
 * 
 * If it is impossible to reach a gate, leave INF as the value.
 * INF is eqaul to 2147483647
 */

const matrix1 = [
    [INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]
];

const matrix2 = [
    [INF, -1, 0, INF],
    [-1, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]
];