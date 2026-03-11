const getTheTitles = function(arr) {
    const titleArr = [];
    for(let obj of arr){
        titleArr.push(obj.title)
    }
    return titleArr;

};

// Do not edit below this line
module.exports = getTheTitles;
