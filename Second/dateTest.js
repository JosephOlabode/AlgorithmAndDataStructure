const today = new Date();

// get current date in y-m-d format
let date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

// get time in h:i:s format
let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

// get datetime in y-m-d h:i:s format
let dateTime = `${date} ${time}`;
//console.log(dateTime);

const CFAbsoluteTimeToDate = (CFATime, unitConversionValue = 1000) => {
    const dt = new Date('January 1 2001 GMT');
    dt.setTime(dt.getTime() + CFATime * unitConversionValue);
    return dt;
};
  
console.log(CFAbsoluteTimeToDate(639494700));

