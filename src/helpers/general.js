//Transform the month data into an array where it can be output sequentially
export const transformMonthData = (year,month) => {
  let monthData = []
  // const blankDay = {
  //   active:false
  // }

  const firstOfMonth = new Date(year,month-1,1);
  const lastOfMonth = new Date(year,month,0);
  console.log('First is on',firstOfMonth.getDay(),firstOfMonth);
  //Adjust for calendar so that Sunday is day 7 and Monday day 0
  if(firstOfMonth.getDay() === 0) {
    const startDay = 7;
  } else {
    const startDay = firstOfMonth.getDay() -1;
  }
  //Set the blank days
  const beforeMonth = ...firstOfMonth;

  for(let i=0;i<startDay;i++) {
    //Go backwards
    monthData.push({
      active:false,
      date: beforeMonth - 1
    });
  }
  //Sandwich the actual month
}
