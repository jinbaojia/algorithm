/*
*字符串匹配：设 haystack 和 needle 是给定的两个串，在主串 haystack 中找到模式串 needle 的过程称为字符串匹配，
* 如果在主串 haystack 中找到 模式串 needle ，则称匹配成功，函数返回 needle 在 haystack 中首次出现的位置，否则匹配不成功，返回 -1。
* 28.实现strStr();
* */
//https://leetcode-cn.com/problems/implement-strstr/solution/zhe-ke-neng-shi-quan-wang-zui-xi-de-kmp-8zl57/
//https://leetcode-cn.com/problems/implement-strstr/solution/shua-chuan-lc-shuang-bai-po-su-jie-fa-km-tb86/
//https://blog.csdn.net/qq_34687559/article/details/109586789 next 数组构建原理
//https://blog.csdn.net/qq_21989927/article/details/109520767 为什么KMP可以中间过程而不会漏掉正确答案
/*
* BF(Brute Force)
* 暴力法
* 时间复杂度：O(n*m)
* 空间复杂度：O(1)
* */

const strStrByBF = (haystack, needle) => { 
    const hayLen = haystack.length;
    const needleLen = needle.length;
    if (!needleLen) {
        return 0;
    }
    if (hayLen < needleLen) {
        return -1;
    }
    for (let i = 0; i < hayLen; i++) {
        for (let j = 0; j < needleLen; j++) {
            const hayStr = haystack[i + j];
            const needleStr = needle[j];
            if (hayStr !== needleStr) {
                break;
            }
            if (hayStr === needleStr && j === needleLen - 1) {
                return i;
            }
        } 
    }
    return -1;
}

/*
*KMP
* 时间复杂度O(n+m)
* 空间复杂度O(m) m === needle.length
* */

const nextArr = (str) => {
    let m = str.length;
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && str[i] !== str[j]) {
            j = pi[j - 1];
        }
        if (str[i] === str[j]) {
            j++;
        }
        pi[i] = j;
    }
    return pi;
}
const strStr = function (haystack, needle) {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }
    if (n === 0) {
        return -1;
    }
    const pi = nextArr(needle);

    for (let i = 0, j = 0; i < n; i++) {
        while (haystack[i] !== needle[j] && j > 0) {
            j = pi[j - 1];
        }
        if (haystack[i] === needle[j]) {
            j++;
        }

        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
};

