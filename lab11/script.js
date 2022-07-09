switch(value){
    case value1:
        //do something
        break;
    case value2:
        //do something
        break;
    default:
        break;
}

function daysOfMonth(month,year){
    switch(month){
        case 2:
            if (isLeafYear(year)) return 29;
            else return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;

    }
}
//trong hàm thì return có thể thay thế cho break