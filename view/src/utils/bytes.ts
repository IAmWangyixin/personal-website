/**
 * 这行代码 const i = Math.floor(Math.log(bytes) / Math.log(k)); 用于确定将字节数转换为哪个单位（如KB、MB等）。下面是这行代码的详细解释：

Math.log(bytes)：这部分计算数字 bytes 的自然对数（底数为 e）。自然对数反映了一个数增长到其值所需的指数倍数。例如，Math.log(1024) 会返回 3，因为 e 的 3 次方大约是 1024。

Math.log(k)：这里 k 通常等于 1024，这是计算机科学中常用的基数，用于将字节转换为KB、MB等。Math.log(k) 计算的是 1024 的自然对数。

Math.log(bytes) / Math.log(k)：将 bytes 的自然对数除以 1024 的自然对数，得到的结果是 bytes 需要被 1024 除多少次才能将其转换为一个小于 1024 的数。换句话说，这会告诉我们 bytes 是 1024 的多少次幂。

Math.floor(...)：Math.floor 函数向下取整，确保结果是一个整数。因为我们想要的是转换的步数，而不是小数，所以使用向下取整确保我们得到一个准确的单位转换级别。

举个例子，如果 bytes 是 1048576（即1MB），那么：

Math.log(1048576) 约等于 13.8365。
Math.log(1024) 等于 6.0399。
13.8365 / 6.0399 约等于 2.2924。
使用 Math.floor 后，结果变为 2，这意味着 1048576 字节是 1024 的 2 次幂，即 1024 * 1024 字节，也就是1MB。

这种方法的优点是它非常高效，并且可以轻松地扩展到更大的单位（如TB、PB等），只需在单位数组中添加相应的字符串即可。
 * @param bytes 
 * @param decimals 
 * @returns string
 */

export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 B';
  
    const k = 1024; // 1KB = 1024 bytes
    const dm = decimals < 0 ? 0 : decimals; // 限制小数位数
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
    const i = Math.floor(Math.log(bytes) / Math.log(k));
  
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}