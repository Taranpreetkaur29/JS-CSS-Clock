const secondhand=document.querySelector(".seconds")
const minutehand=document.querySelector(".minutes")
const hourhand=document.querySelector(".hour")

function date() {
    const newdate=new Date();

    const sec=newdate.getSeconds()
    const seccal=((sec/60)*360)+90;
    secondhand.style.transform = `rotate(${seccal}deg)`;

    const min=newdate.getMinutes()
    const mincal=((min/60)*360)+ ((sec/60)*6) +90;
    minutehand.style.transform = `rotate(${mincal}deg)`;

    const hr=newdate.getHours()
    const hrcal=((hr/12)*360)+ ((min/60)*30)+90;
    hourhand.style.transform = `rotate(${hrcal}deg)`;
}

setInterval(date,1000);
