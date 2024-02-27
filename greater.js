function biggerIsGreater(w) {

    let nextGreater = '';
    let currentLetter = w[0];

    let isInOrder = true;

    for (let i=1; i<w.length; i++) {
        if (w[i] > currentLetter) {
            nextGreater = nextGreater + currentLetter;
            currentLetter = w[i];
            // if the entire string is in order
            // flip the last two characters
            if (isInOrder && i === w.length-1) {
                const lastTwoLetters = w[i] + nextGreater[nextGreater.length-1];
                console.log("lastTwo: ", lastTwoLetters);
                nextGreater = nextGreater.slice(0, i-1) + lastTwoLetters;
            }
        } else {
            nextGreater = nextGreater + w[i];
            isInOrder = false;
        }
    }

    console.log(nextGreater);

}

biggerIsGreater('abcd');