/**
 * 时间复杂度O(n^2)
 * 空间复杂度O(1)
 * */
const bubbleSort1 = (array) => {
    let length = array.length;
    if (!length) {
        return array;
    }

    for (let i = length; i >= 2; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
};

const bubbleSort = (array) => {
    let length = array.length;
    if (!length) {
        return array;
    }

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }

    return array;
};

// const list = [32, 12, 542, 7, 34, 778, 3, 6, 32];
// console.log(bubbleSort(list));
