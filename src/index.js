module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return [];
    } else {
        var array = [];
        for (i = 0; i < matrix.length; i++) {
            if (i == 0 || i % 2 == 0) {
                array.push(matrix[i]) ;
          } else {
              array.push(matrix[i].reverse()) ;
           }
       };
       return array.flat();
    };
}
