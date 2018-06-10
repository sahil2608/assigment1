var marks = (stu) => {
    var sum = 0
    for (n in stu) {
        sum = sum + stu[n];
    }
    var avg = sum / stu.length

    console.log('Total marks = ' + sum)
    console.log('Average marks = ' + avg)
    if (avg > 90 && avg < 100) {
        console.log('A')
    } else if (avg > 80 && avg < 90) {
        console.log('B')
    } else if (avg > 70 && avg < 80) {
        console.log('C')
    } else if (avg > 60 && avg < 70) {
        console.log('D')
    } else if (avg < 60 && avg < 70) {
        console.log('F')
    }
}

marks([80, 77, 88, 95, 68])