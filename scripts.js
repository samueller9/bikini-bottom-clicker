/********************************
        COOKIE CLIKCER
********************************/
  //declare default variables
  let cookieCount = 0;

  //declare DOM variables
  let cookieCounter = document.getElementById('cookie-counter');
  let cookieClicker = document.getElementById('cookie-clicker');

  //everytime a user clicks the button, their cookies are increased by the value of their clickPower.
  cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  cookieCounter.innerHTML = cookieCount;
  })

  //refresh cookies
  let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
  }

  /********************************
          CLICK POWER
  ********************************/

    //declare default variables
    let clickPower = 1;

    //default variables
    let clickPowerPriceAmount = 50;
    let clickPowerLevelNumber = 1;

    //declare DOM variables
    let buyClickPower = document.getElementById('buy-click-power');
    let clickPowerPrice = document.getElementById('click-power-price');
    let clickPowerLevel = document.getElementById('click-power-level');
    let clickPowerMultiple = document.getElementById('click-power-multiple');

    //Buy click power
    buyClickPower.addEventListener("click", function() {
      if (cookieCount >= clickPowerPriceAmount) {
        console.log("Item succesfully Bought");
      } else {
        console.log("You don't have enough cookies!");
      }

      //update Click Power
      clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

    if (cookieCount >= clickPowerPriceAmount) {
      //subtract cookies from the price of the item
      cookieCount -= clickPowerPriceAmount;
      //update cookie counter.
      cookieCounter.innerHTML = cookieCount;
    }

  })

    //everytime a user clicks the button, their cookies are increased by the value of their clickPower.
    cookieClicker.addEventListener("click", function() {
      cookieCount = cookieCount + clickPower;
      refreshCookieCount()
    })

    if (cookieCount >= clickPowerPriceAmount) {
      //subtract cookies from the price of the item
      cookieCount -= clickPowerPriceAmount;
      refreshCookieCount()

      //Upgrade power level
      clickPowerLevelNumber += 1;

      //Update click price
      clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

      //update Click Power
      clickPower += 1;

      //refresh shop item
      refreshPowerClick();
    }

  let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
  }


  /********************************
            GRANDMAS
  ********************************/

  //set default values
  let grandmaPower = 50;
  let grandmaPriceAmount = 500;
  let grandmaLevelNumber = 0;
  let grandmaAuto = false;

  //declare DOM variables
  let buyGrandma = document.getElementById('buy-grandma');
  let grandmaPrice = document.getElementById('grandma-price');
  let grandmaLevel = document.getElementById('grandma-level');
  let grandmaMultiple = document.getElementById('grandma-multiple');

  //buy a grandma
  buyGrandma.addEventListener("click", function() {
    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount) {
      // Subtract cookies from the price of the item.
      cookieCount +=  - grandmaPriceAmount;
      refreshCookieCount()
    //upgrade power level
    grandmaLevelNumber += 1;
    //update price
    grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    //update grandma power
    grandmaPower += 10;
    //turn autoGrandma on!
    autoGrandma = true
    autoGrandmaStart();
    //update grandma power
    grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
    //refresh shop item
    refreshGrandma();
  }
})

  let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower;
    grandmaMultiple.innerHTML = grandmaPower - 10;
  }

  let autoGrandmaStart = function() {
    let grandmaInt = window.setInterval(function(){
      cookieCount += grandmaPower;
      refreshCookieCount();
    }, 1000);
  }


  /********************************
          FACILITIES
********************************/

//set default values
let facilityAuto = false;
let facilityPower = 500;
let facilityPriceAmount = 1500;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;
    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
    cookieCount -= facilityPriceAmount;
    refreshCookieCount()
    //upgrade power level
    facilityLevelNumber += 1;
    //update price
    facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
    //update facility power
    facilityPower += 600;
    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();
    //update facility power
   facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;
    //refresh shop item
    refreshFacility();
  }
})


//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
      cookieCount += facilityPower;
      refreshCookieCount();
    }, 1000);
}
//refresh shop
//refresh shop
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}


/********************************
        ELF
********************************/
  //default
  let elfAuto = false;
  let elfPower = 1500;
  let elfPriceAmount = 2000;
  let elfLevelNumber = 0;

  //declare DOM variables
  let buyElf = document.getElementById('buy-elf');
  let elfPrice = document.getElementById('elf-price');
  let elfLevel = document.getElementById('elf-level');
  let elfMultiple = document.getElementById('elf-multiple');


  buyElf.addEventListener("click", function() {
      //set autoLoop to false
      elfAuto = false;
      //make sure we have enough cookies
      if (cookieCount >= elfPriceAmount) {
      cookieCount -= elfPriceAmount;
      refreshCookieCount()
      //upgrade power level
      elfLevelNumber += 1;
      //update price
      elfPriceAmount = Math.floor(elfPriceAmount * 1.33);
      //update elf power
      elfPower += 800;
      //turn autoElf on!
      elfAuto = true
      autoElfStart();
      //update elf power
     elfPower += 800 + Math.floor(elfLevelNumber * 1.33);;
      //refresh shop item
      refreshElf();
    }
  })

  let refreshElf = function() {
    elfLevel.innerHTML = elfLevelNumber
    elfPrice.innerHTML = elfPriceAmount;
    elfMultiple.innerHTML = elfPower;
    elfMultiple.innerHTML = elfPower - 30;
  }

  let autoElfStart = function() {
    let elfInt = window.setInterval(function(){
      cookieCount += elfPower;
      refreshCookieCount();
    }, 2000);
  }



  /********************************
          SANTA
  ********************************/
    //default
    let santaAuto = false;
    let santaPower = 1000;
    let santaPriceAmount = 50000;
    let santaLevelNumber = 0;

    //declare DOM variables
    let buySanta = document.getElementById('buy-santa');
    let santaPrice = document.getElementById('santa-price');
    let santaLevel = document.getElementById('santa-level');
    let santaMultiple = document.getElementById('santa-multiple');


    buySanta.addEventListener("click", function() {
        //set autoLoop to false
        santaAuto = false;
        //make sure we have enough cookies
        if (cookieCount >= santaPriceAmount) {
        cookieCount -= santaPriceAmount;
        refreshCookieCount()
        //upgrade power level
        santaLevelNumber += 1;
        //update price
        santaPriceAmount = Math.floor(santaPriceAmount * 1.33);
        //update santa power
        santaPower += 1000;
        //turn autoElf on!
        santaAuto = true
        autoSantaStart();
        //update santa power
       santaPower += 1000 + Math.floor(santaLevelNumber * 1.33);;
        //refresh shop item
        refreshSanta();
      }
    })

    let refreshSanta = function() {
      santaLevel.innerHTML = santaLevelNumber
      santaPrice.innerHTML = santaPriceAmount;
      santaMultiple.innerHTML = santaPower;
      santaMultiple.innerHTML = santaPower - 70;
    }

    let autoSantaStart = function() {
      let santaInt = window.setInterval(function(){
        cookieCount += santaPower;
        refreshCookieCount();
      }, 1000);
    }

    /********************************
            MRS. CLAUS
    ********************************/
      //default
      let clausAuto = false;
      let clausPower = 10000;
      let clausPriceAmount = 100000;
      let clausLevelNumber = 0;

      //declare DOM variables
      let buyClaus = document.getElementById('buy-claus');
      let clausPrice = document.getElementById('claus-price');
      let clausLevel = document.getElementById('claus-level');
      let clausMultiple = document.getElementById('claus-multiple');


      buyClaus.addEventListener("click", function() {
          //set autoLoop to false
          clausAuto = false;
          //make sure we have enough cookies
          if (cookieCount >= clausPriceAmount) {
          cookieCount -= clausPriceAmount;
          refreshCookieCount()
          //upgrade power level
          clausLevelNumber += 1;
          //update price
          clausPriceAmount = Math.floor(clausPriceAmount * 1.33);
          //update claus power
          clausPower += 1000;
          //turn autoElf on!
          clausAuto = true
          autoClausStart();
          //update claus power
         clausPower += 1000 + Math.floor(clausLevelNumber * 1.33);;
          //refresh shop item
          refreshClaus();
        }
      })

      let refreshClaus = function() {
        clausLevel.innerHTML = clausLevelNumber
        clausPrice.innerHTML = clausPriceAmount;
        clausMultiple.innerHTML = clausPower;
        clausMultiple.innerHTML = clausPower - 70;
      }

      let autoClausStart = function() {
        let clausInt = window.setInterval(function(){
          cookieCount += clausPower;
          refreshCookieCount();
        }, 1000);
      }
