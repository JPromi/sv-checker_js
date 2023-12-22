exports.checkSV = function(svNumber) {
    var svNumberA = svNumber.split("");
  
    if (svNumberA.length == 10) {
        var sum = 0;
        sum += parseInt(svNumberA[0]) * 3;
        sum += parseInt(svNumberA[1]) * 7;
        sum += parseInt(svNumberA[2]) * 9;
        sum += parseInt(svNumberA[4]) * 5;
        sum += parseInt(svNumberA[5]) * 8;
        sum += parseInt(svNumberA[6]) * 4;
        sum += parseInt(svNumberA[7]) * 2;
        sum += parseInt(svNumberA[8]) * 1;
        sum += parseInt(svNumberA[9]) * 6;

        var rest = sum % 11;

        if(rest == parseInt(svNumberA[3])) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}