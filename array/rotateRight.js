/*
* 旋转数组，将数组每个节点向右移动 k 个位置。
* */
const rotateRight = (array, k) => {
    const len = array.length;
    if (!len || k === 0) {
        return array;
    }

    const kNew = k % len;
    if (!kNew) {
        // k===0 不需要旋转
        return array;
    }
    //翻转整个数组
    for (let j = 0, i = len - 1; j <= i; i--, j++) {
        [array[i], array[j]] = [array[j], array[i]];
    }
    //翻转 kNew 之后的数
    for (let i = kNew, j = len - 1; i <= j; j--, i++) {
        [array[i], array[j]] = [array[j], array[i]];
    }
    //翻转 kNew 之前的数
    for (let i = 0; i < Math.floor((kNew / 2)); i++) {
        [array[i], array[kNew - i - 1]] = [array[kNew - i - 1], array[i]];
    }
    return array
}
console.log(rotateRight([1, 2, 3, 4, 5,6], 3));