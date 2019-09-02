
let timer = 0;

function digitalTimer(){
    let msTenTimer = 1;
    let msHundredsTimer = 1;
    let secondTimer = 1;
    setInterval(function(){
        if(msTenTimer > 9){
            msTenTimer = 0;
        }
        document.querySelector("#msTens").textContent = msTenTimer;
        msTenTimer += 1
    }, 10);
    setInterval(function(){
        if(msHundredsTimer> 9){
            msHundredsTimer = 0;
        }
        document.querySelector("#msHundreds").textContent = msHundredsTimer;
        msHundredsTimer += 1
    }, 100);
    setInterval(function(){
        if(secondTimer > 9){
            secondTimer = 0;
        }
        document.querySelector("#secondOnes").textContent = secondTimer;
        secondTimer += 1
    }, 1000);
    document.querySelector("#secondTens").textContent = 0;
}
digitalTimer();