// getting html element with document object 
const txtDate=document.getElementById("date");
const txtDay=document.getElementById("day");
const txtMonth=document.getElementById("month");
const txtYear=document.getElementById("year");

// retriving data using Date Object
const fetchDate=()=>{
    let currentDate=new Date();

    const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
    txtDate.innerHTML=(currentDate.getDate()<10?"0":"")+currentDate.getDate();
    txtDay.innerHTML=(currentDate.getDay<10?"0":"")+weekDays[currentDate.getDay()]
    txtMonth.innerHTML=months[currentDate.getMonth()];
    txtYear.innerHTML=currentDate.getFullYear();
}

// invoking function
fetchDate();