function getEachArg (a, b){
    let num = a;
    let intervalId = setInterval(function () {
                                console.log(num);
                                if (num == b){
                                 clearInterval(intervalId)
                                };
                                num++
                                }, 1000);
  }
  getEachArg(1, 2)