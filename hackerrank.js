function hackerrankInString(s) {

    let h = 0;
    let a = 0;
    let c = 0;
    let k = 0;
    let e = 0;
    let r = 0;
    let n = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'h') {
            h = h + 1;
        }
        else if (h > 0 && s[i] === 'a') {
            a = a + 1;
        }
        else if (a > 0 && s[i] === 'c') {
            c = c + 1;
        }
        else if (c > 0 && s[i] === 'k') {
            k = k + 1;
        }
        else if (k > 0 && s[i] === 'e') {
            e = e + 1;
        }
        else if (e > 0 && s[i] === 'r') {
            r = r + 1;
            continue;
        }
        else if (r > 0 && s[i] === 'r') {
            r = r + 1;
        }
        else if (r > 1 && a > 0 && s[i] === 'a') {
            a = a + 1;
        }
        else if (a > 1 && r > 1 && s[i] === 'n') {
            n = n + 1;
        }
        else if (n > 0 && r > 1 && s[i] === 'c') {
            c = c + 1;
        }
        else if (c > 1 && r > 1 && s[i] === 'k') {
            k = k + 1;
        }
    }
    console.log("h: ", h);
    console.log("a: ", a);
    console.log("c: ", c);
    console.log("k: ", k);
    console.log("e: ", e);
    console.log("r: ", r);
    console.log("r: ", r);
    console.log("a: ", a);
    console.log("n: ", n);
    console.log("k: ", k);
    return h>0 && a>0 && c>0 && k>1 && e>0 && r>1 && a>1 && n>0 ? 'YES' : 'NO';
}

console.log(hackerrankInString("hhhackkerbanker"));