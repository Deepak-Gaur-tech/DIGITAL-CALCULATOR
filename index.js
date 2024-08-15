let h2=document.querySelector("h2");

console.log(h2)

function getTime(){

    let now= new Date();
    console.log(now);

    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    timer = h + ":" + m + ":" + s;
  
    h2.textContent = timer;
    
}

getTime();
setInterval(getTime,1000);