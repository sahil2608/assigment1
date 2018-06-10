var bitd = (a) => {
    var bin = a.toString(2);
    var now = parseInt(bin, 2);
    console.log(now)

    var oct = a.toString(8);

    console.log(oct)

    var hex = a.toString(16);

    console.log(hex)
}
bitd(1365.3651);