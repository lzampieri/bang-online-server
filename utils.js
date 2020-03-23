function hourToString(hour) {
    return ( hour.getHours() < 10 ? "0" : "" ) + hour.getHours() + ":" + ( hour.getMinutes() < 10 ? "0" : "" ) + hour.getMinutes() + ":" + ( hour.getSeconds() < 10 ? "0" : "" ) + hour.getSeconds();
}

function shuffle(a) {
    var j, x, i;
    for( i = a.length - 1; i > 0; i--) {
        j = Math.floor( Math.random() * (i+1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

module.exports = {hourToString: hourToString, shuffle: shuffle}