//Making Timer using setInterval function
let sec=1;
let min=0;
let hour=0;
function Timer(){
console.log(hour+":"+min+":"+sec);
sec++;
if(sec%60===0 ){
  
    min++;
    sec=0;
}
   if (min === 60) {
        min = 0;
        hour++;
    }

}
setInterval(Timer,1);