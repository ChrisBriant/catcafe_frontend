function splitArray(array,chunkSize ) {
    let arrayOfArrays = [];

    while (array.length > 0) {
        let arrayElement = array.splice(0,chunkSize);
        arrayOfArrays.push(arrayElement);
    }
    return arrayOfArrays;
}

function isLeapYear(year) {
  return year % 4 === 0;
}

function getLastOfMonth(year,month) {
  switch(month) {
    case 1:
      return 31;
    case 2:
      if(isLeapYear(year)) {
        return 29;
      } else {
        return 28;
      }
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
  }
}

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

  const firstOfMonthStr = `${year}-${month}-1`;
  const firstOfMonth = new Date(firstOfMonthStr);
  const lastOfMonthStr = `${year}-${month}-${getLastOfMonth(year,month)}`;
  const lastOfMonth = new Date(lastOfMonthStr);

  //Adjust for calendar so that Sunday is day 7 and Monday day 0

  if(firstOfMonth.getDay() !== 1) {
    //Set the blank days
    let beforeMonthStr = '';
    if(month === 1) {
      beforeMonthStr = `${year-1}-12-${getLastOfMonth(year-1,12)}`;
    } else {
      beforeMonthStr = `${year}-${month-1}-${getLastOfMonth(year,month-1)}`;
    }
    let beforeMonth = new Date(beforeMonthStr);

    //Wind back
    while(beforeMonth.getDay() !== 1) {
      beforeMonth.setDate(beforeMonth.getDate() - 1);
    }

    while(beforeMonth.getMonth() !== firstOfMonth.getMonth()) {
      monthData.push({
        active:false,
        gone: true,
        className: 'inactive-day',
        day: beforeMonth.getDate(),
        date: new Date(beforeMonth.getTime()),
        dateStr: formatDate(beforeMonth)
      });
      beforeMonth.setDate(beforeMonth.getDate() + 1);
    }
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
      available: slots[`${formatDate(firstOfMonth)}`].available,
      dateStr: formatDate(firstOfMonth)
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
      date: new Date(lastOfMonth.getTime()),
      dateStr: formatDate(lastOfMonth)
    });
    lastOfMonth.setDate(lastOfMonth.getDate() + 1);
  }
  //Return month data partitioned into weeks
  return(splitArray(monthData,7));
}


//Helper to get the day data into a presentable format
export function transformDayData(day) {
  let daySlots = {
    1: [],
    2: [],
    3: []
  };
  let timeKeys = Object.keys(day.times);
  let slotPartition = 1;
  for(let i=0;i<timeKeys.length;i++) {
    let timeAsDate = new Date(`${day.dateStr}T${timeKeys[i]}`);
    let booked = day.times[timeKeys[i]].booked;
    let className = 'slot-available'

    //Control the partition value
    if(timeKeys[i] === '12:30') {
      slotPartition = 2;
    }
    if(timeKeys[i] === '16:30') {
      slotPartition = 3;
    }

    if(booked) {
      className = 'slot-booked';
    }
    if(timeAsDate < Date.now()) {
      className = 'slot-unavailable';
      booked =  true;
    }
    let slotObj = {
      time: timeKeys[i],
      booked : booked,
      className: className
    }
    daySlots[slotPartition].push(slotObj);
  }
  return daySlots;
}

export function transformTableData(tables) {
  let tablesObj = {
    1: { booked: false,
         className: 'svg-table'
    },
    2: { booked: false,
         className: 'svg-table'
    },
    3: { booked: false,
         className: 'svg-table'
    },
    4: { booked: false,
         className: 'svg-table'
    },
    5: { booked: false,
         className: 'svg-table'
    },
    6: { booked: false,
         className: 'svg-table'
    },
    7: { booked: false,
         className: 'svg-table'
    },
    8: { booked: false,
         className: 'svg-table'
    },
  }
  for(let i=0;i<tables.length;i++) {
    let tableObj = {
      booked: true,
      className: 'svg-booked-table'
    };
    tablesObj[tables[i].table_number] = tableObj;
  }
  return tablesObj;
}
