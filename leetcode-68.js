/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = []
    let start = 0;
    let end = -1;
    let currentWordsLen = 0;
    let i = 0;

    while( i < words.length) {
        if(words[i].length > maxWidth ) {
            return res;
        }

        let newLen = currentWordsLen + (end - start + 1) + words[i].length;
        if( newLen <= maxWidth ) {
            end  = i;
            currentWordsLen += words[i].length;
            i++;
        } else {
            let line = createLine(words, maxWidth, start, end, currentWordsLen)
            res.push(line)
            start = i;
            end = i - 1
            currentWordsLen = 0;
        }
    }

    let lastLine = createLine(words, maxWidth, start, end, currentWordsLen, true);
    res.push(lastLine);
    return res;
};

let createLine = (words, maxWidth, start, end, currentWordsLen, isLast) => {
    let res = '';
    if( start < 0 || end >= words.length) {
        return res;
    }

    res += words[start];
    let numberOfWords = end - start + 1;
    if(numberOfWords === 1 || isLast) {
        for(let i = start + 1 ; i <= end; i++) {
            res += (' ' + words[i])
        }

        let remainingSpaces = maxWidth - currentWordsLen - (numberOfWords - 1);
        for( i = 0; i < remainingSpaces; i++) {
            res += ' ';
        }

        return res;
    }

    let k = parseInt((maxWidth - currentWordsLen) / (numberOfWords - 1));
    let m = (maxWidth - currentWordsLen)%(numberOfWords - 1);

    for( i = start + 1; i <= end ; i++ ){
        let nspace = i - start <= m ? k + 1: k;

        for(let j = 0 ; j < nspace ; j++ ) {
            res += ' ';
        }

        res += words[i];
    }

    return res;
}