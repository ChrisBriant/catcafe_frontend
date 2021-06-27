

function splitArray(array,chunkSize ) {
    let arrayOfArrays = [];

    while (array.length > 0) {
        let arrayElement = array.splice(0,chunkSize);
        arrayOfArrays.push(arrayElement);
    }
    return arrayOfArrays;
}


//https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const monthNames = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

export function getMonthName(monthNo) {
  return monthNames[monthNo];
}

/*
TEST CASES
Beginning part

2020,11
2020,10
2020, 6 - 1st is monday
2021,5


End part

2021, 7
2021, 10
*/

//Transform the month data into an array where it can be output sequentially
export const transformMonthData = (year,month,slots) => {
  let monthData = []
  // const blankDay = {
  //   active:false
  // }

  const firstOfMonth = new Date(year,month-1,1);
  const lastOfMonth = new Date(year,month,0);
  //console.log('First is on',firstOfMonth.getDay(),firstOfMonth);
  //console.log('Last is on',lastOfMonth);
  //Adjust for calendar so that Sunday is day 7 and Monday day 0
  let startDay;
  if(firstOfMonth.getDay() === 0) {
    startDay = 7;
  } else {
    startDay = firstOfMonth.getDay() -1;
  }
  //Set the blank days
  let beforeMonth = new Date(firstOfMonth.getTime());
  beforeMonth.setDate(beforeMonth.getDate() - startDay);

  for(let i=0;i<startDay;i++) {
    //Go backwards
    if(beforeMonth.getDay() >  0) {
      monthData.push({
        active:false,
        gone: true,
        className: 'inactive-day',
        day: beforeMonth.getDate(),
        date: new Date(beforeMonth.getTime())
      });
    }
    beforeMonth = new Date(beforeMonth.setDate(beforeMonth.getDate() + 1));
  }

  //Sandwich the actual month
  //Process the bulk of the calendar month
  for(let i=0;i<lastOfMonth.getDate();i++) {
    let gone = false;
    let className = 'active-day';
    let dtNow = new Date()
    dtNow.setDate(dtNow.getDate()-1)
    if(dtNow >= firstOfMonth) {
      gone = true;
      className = 'passed-day';
    }
    monthData.push({
      active:true,
      gone: gone,
      className: className,
      day: firstOfMonth.getDate(),
      date: new Date(firstOfMonth.getTime()),
      available: slots[`${formatDate(firstOfMonth)}`].available
    });
    firstOfMonth.setDate(firstOfMonth.getDate() + 1);
  }

  //Get the end of the month
  lastOfMonth.setDate(lastOfMonth.getDate() + 1);

  while(lastOfMonth.getDay() !== 1) {
    monthData.push({
      active:false,
      gone:false,
      className: 'inactive-day',
      day: lastOfMonth.getDate(),
      date: new Date(lastOfMonth.getTime())
    });
    lastOfMonth.setDate(lastOfMonth.getDate() + 1);
  }
  //Return month data partitioned into weeks
  return(splitArray(monthData,7));
}
