// Code credits: this code was written by Dr. Pavol Federl for the SENG 513 course at the UofC
// https://codepen.io/pfederl/pen/JEMKwB


function getStats(txt) {

    // calculating nChars (the number of characters)
    let nChars = txt.length;

    //====================================================
    // Splitting text into starts to begin
    let lineList = []; // list that contains all lines
    let nonEmptLineList = []; // list that contains all NON-EMPTY lines
    lineList = txt.split("\n");
    //================================================

    //================================================
    // calculating nNonEmptyLines (number of non empty )
    for (let i=0; i < lineList.length; i++) {
        if (lineList[i] != '') {
            nonEmptLineList.push(lineList[i]);
        }
    }
    //================================================

    //================================================
    // calculating nWords (the number of word)
    // split text on numbers and spaces
    let wordList = txt.split(/(\d+| |\n+)/);
   
    // delete spaces that are in wordList
    for (let i=0; i < wordList.length; i++) {
        if (wordList[i].indexOf(' ') !== -1) wordList.splice(i, 1);
        if (wordList[i].indexOf('\n') !== -1) wordList.splice(i, 1);
    }

    // remove special characters from words and remove empty elements
    let goodWordList = [];
    for (i=0; i < wordList.length; i++) {
        wordList[i] = wordList[i].replace(/[^\w ]/g, '');
        if (wordList[i] !== "") {
            goodWordList.push(wordList[i]);
        }
    }
    //================================================

    //================================================
    // calculating maxLineLength (the maximum line length in the text file)
    let maxLineLen = 0;
    for (let i=0; i< lineList.length; i++) {
        if (lineList[i].length > maxLineLen) {
            maxLineLen = lineList[i].length;
        }
    }
    //================================================
    
    //================================================
    // calculating averageWordLength (the average length of the words in the file)
    let avgWordLen = 0;
    for (let i=0; i < goodWordList.length; i++) {
        avgWordLen = avgWordLen + goodWordList[i].length;
    }
    avgWordLen = avgWordLen / goodWordList.length;
    //================================================





    //================================================
    // calculating tenLongestWords (the 10 longest words in the text file)
    let tenLong = [];

    goodWordList.sort();

    console.log();//-----------------------------------------------------------

    goodWordList.sort((a, b) => {
        if ( (a[0] == 5 || a[0] == 6) ) return -1;
    });

    goodWordList.sort((a, b) => b.length - a.length);

    tenLong = goodWordList.slice(0,10);
    //================================================








    //================================================
    // calculating tenMostFrequentWords (the 10 most frequent words in the text file)
    let tenMostFreq = {};
    for (let i=0; i < goodWordList.length; i++) {
        if (goodWordList[i] in tenMostFreq) {
            tenMostFreq[goodWordList[i]] = (tenMostFreq[goodWordList[i]] + 1);
        }
        else {
            tenMostFreq[goodWordList[i]] = 1;
        }
    }

    let tenMostFreqSort = [];
    for (let i in tenMostFreq) {
        tenMostFreqSort.push([i, tenMostFreq[i]]);
    }

    tenMostFreqSort.sort((a, b) => b[1] - a[1]);


    let finalTopTenMostFreq = [];
  
    let iter = 0;
    Object.values(tenMostFreqSort).forEach(val => {
        if (iter < 10) {
            finalTopTenMostFreq.push(val[0]);
            iter++;
        }
    })

    //================================================




    return {
        nChars: nChars,                                                     
        nWords: goodWordList.length,
        nLines: lineList.length, 
        nNonEmptyLines: nonEmptLineList.length,
        averageWordLength: avgWordLen,
        maxLineLength: maxLineLen,

        tenLongestWords: tenLong,
        tenMostFrequentWords: finalTopTenMostFreq

    };

}
