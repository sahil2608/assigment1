var low = () => {
    var arr = [76, 14, 16, 23, 34, 54, 54, 63, 72, 74, 41, ]
    var small = arr[0];
    for (i = 1; i <= small; i++) {
        if (small > arr[i]) {
            small = arr[i]
        }
    }
    console.log(small)
}
low()