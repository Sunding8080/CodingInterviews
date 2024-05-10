var val = 10;
var ans = 0;
while (val != 0) {
    var tmp = val % 2;
    if (tmp == 1) ++ans;
    val /= 2;
}

console.log(ans);