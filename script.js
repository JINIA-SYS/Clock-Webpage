        let hr = document.getElementById('hr')
        let min = document.getElementById('min');
        let sec = document.getElementById('sec');

    function AnalogClock()
    {
        let day = new Date();
        let hh = day.getHours();
        let mm = day.getMinutes();
        let ss = day.getSeconds();


        return hr.style.transform = `rotate(${hh*30+(mm/12)}deg)`,min.style.transform = `rotate(${mm*6}deg)`,sec.style.transform = `rotate(${ss*6}deg)`
    }




    //Digital Clock Section
    function DigitalClock()
    {
        let hr1=document.getElementById('hour');
    let min1=document.getElementById('minute');
    let sec1=document.getElementById('second');
    let ampm=document.getElementById('ampm')
    let day1=new Date();
    let hh1=day1.getHours();
    let mm1=day1.getMinutes();
    let ss1=day1.getSeconds();
    let am=hh1>=12?"PM":"AM";

    if(hh1>12)
    {
        hh1=hh1-12
    }
    hh1=(hh1<10)?"0"+hh1:hh1;
    mm1=(mm1<10)?"0"+mm1:mm1;
    ss1=(ss1<10)?"0"+ss1:ss1;

    hr1.innerHTML=hh1
    min1.innerHTML=mm1
    sec1.innerHTML=ss1
    ampm.innerHTML=am

    }
    setInterval(DigitalClock,1000)
    setInterval(AnalogClock,1000)