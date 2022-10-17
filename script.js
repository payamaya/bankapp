let bankInformation = {
  accountName: '',
  showBalance: 0,
  getBalance: 0,
  deposit: '',
  withdraw: '',
  getAccountName: function () {
    return this.accountName
  },
  accountError: '',
  exitAccount: '',
}
const variableName = 10
isNaN(variableName)
// const personInfo = ['Paul', 'Yashouh', 3, 'developer', 'birthday']
// const types = []
// console.log(types)
// for (let i = 0; i < personInfo.length; i++) {
//   console.log(personInfo[i], typeof personInfo[i])
//   types.push(typeof personInfo[i])
// }
// console.log(types)

// console.log('ONLY STRINGS!!!')
// for (let i = 0; i < personInfo.length; i++) {
//   if (typeof personInfo[i] !== 'string') continue
//   console.log(personInfo[i], typeof personInfo[i])
// }
// console.log('BREAK WITH NUMBERS')
// for (let i = 0; i < personInfo.length; i++) {
//   if (typeof personInfo[i] !== 'string') break

//   console.log(personInfo[i], typeof personInfo[i])
// }
// for (let bankInformation = 0; bankInformation <= 10; bankInformation++) {
//   console.log(`Your info ${bankInformation}`)
// }
// const personInfo = ['Paul', 'Yashouh', 3, 'developer', 'birthday']
// for (let i = 0; i < personInfo.length; i++) {
//   console.log(personInfo[i])
// }
// console.log(bankInformation)
// // we can use a . notation
// console.log(bankInformation.accountName)
// console.log(bankInformation)
// // we can put expression in the [] notation but not in the . notation
// const key = 'Balance'
// console.log('show' + key)
// console.log('get' + key)
const selectBtn = document.getElementById('Select')
selectBtn.addEventListener('click', atm)
function atm() {
  const message = parseFloat(
    prompt(
      'Select:\n 1.accountName:\n 2.showBalance: \n 3.getBalance \n 4.deposit \n 5.Withdraw \n 6.getAccountName \n 7.accountError \n 8.exitAccount'
    )
  )
  // console.log(bankInformation[message])
  switch (message) {
    case 1:
      const accountNameValue = prompt(`Please enter your`)
      if (!isNaN(accountNameValue)) {
        window.alert('error mess')
      } else {
        bankInformation.accountName = accountNameValue
        window.alert(
          (document.getElementById(
            'nameAccount'
          ).innerHTML = `Welcome ${bankInformation.accountName}`)
        )
      }
      break
    case 2:
      const totalBalance =
        bankInformation.showBalance + 1 * bankInformation.deposit
      // if (!(showBalance = 'string'))
      totalBalance
        ? (document.getElementById(
            'showbalance'
          ).innerHTML = `Your total balance is ${totalBalance}`)
        : window.alert(`Your balance is ${bankInformation.showBalance} $`)
      break
    case 3:
      // alert(`Your current balance is ${bankInformation.getBalance} $`)
      bankInformation.getBalance
        ? (document.getElementById(
            'getbalance'
          ).innerHTML = `Your balance is ${bankInformation.getBalance} $`)
        : window.alert(`Your balance is ${bankInformation.getBalance} $`)

      break

    case 4:
      const depositValue = parseFloat(
        prompt('How much would you like to deposit ?')
      )
      if (bankInformation.accountName === '') {
        window.alert('Cant depsot before login in')
      } else if (isNaN(depositValue)) {
        window.alert('Inavlid number')
      } else if (depositValue <= 0) {
        window.alert('Can insert negativ numbers')
      } else if (depositValue >= 1) {
        bankInformation.showBalance += depositValue
        document.getElementById(
          'depositValue'
        ).innerHTML = `Your deposit history ${bankInformation.showBalance}`
      }
      break
    case 5:
      const withdrawValue = parseFloat(
        prompt('How much would you like to withdraw ?')
      )

      // confirm('Your withdraw')
      if (bankInformation.accountName === '') {
        window.alert('Cant depsot before login in')
      } else if (isNaN(withdrawValue)) {
        window.alert('Inavlid number')
      } else if (withdrawValue <= 0) {
        window.alert('Can insert negativ numbers')
        document.getElementById('withdrawValue').innerHTML =
          'This is unvalid process'
      } else if (withdrawValue > bankInformation.showBalance) {
        window.alert('You dont have enough credit, please check your balance')
        document.getElementById('withdrawValue').innerHTML =
          ' This request has been denied'
      } else {
        bankInformation.showBalance -= withdrawValue
        document.getElementById(
          'withdrawValue'
        ).innerHTML = `Your withdraw history ${withdrawValue}`
      }
      break
    case 6:
      bankInformation.accountName === ''
        ? window.alert('Must login first')
        : (document.getElementById(
            'nameAccount'
          ).innerHTML = `Account name owner is ${bankInformation.accountName}`)
      break
    case 7:
      bankInformation.accountError === ''
      window.alert(bankInformation.accountError)
      break
    case 8:
      // // Get the modal
      // var modal = document.getElementById('id01')

      // // When the user clicks anywhere outside of the modal, close it
      // window.onclick = function (event) {
      //   if (event.target == modal) {
      //     modal.style.display = 'none'
      //   }
      // }
      confirm(`Your about to exit the program ${bankInformation.exitAccount}`)
    default:
  }
}
// if (bankInformation['message']) {
//   console.log(bankInformation[message])
// } else {
//   alert('error')
// }
// function accountName(Name) {
//   const accountNameBtn = `You name ${Name}`
//   return accountNameBtn
// }
// accountName('Paul')
// const yourName = accountName('Paul')
// console.log(yourName)

// function showbalance(Balance) {
//   const showbalanceBtn = `You have ${Balance}`
//   return showbalanceBtn
// }
// showbalance(1000)
// const yourBalance = showbalance(1000)
// console.log(yourBalance)

// // /* var box = document.getElementById('box').addEventListener('mousemove', runEvent) */
// // let output = document.getElementById('output')
// // output.addEventListener('mousemove', runOutput)

// // let box = document.getElementById('box')
// // box.addEventListener('mousemove', runEvent)

// // function runEvent(e) {
// //   console.log('EVENT TYPE:' + e.type)
// //   box.style.backgroundColor = 'rgb(' + e.offsetX + ' , ' + e.offsetY + ', 40px)'
// // }
// // function runOutput() {
// //   output.innerHTML =
// //     '<h3> MouseX:' + e.offsetX + '</h3> <h3>MouseY:' +e.offsetY+ '</h3>'
// // }

// let person = {
//   accountName: '',
//   showBalance: 1000,
//   getBalance: 2500,
//   deposit: 0,
//   withdraw: 0,
//   getAccountName: 'Yashouh',
//   accountError: '',
//   exitAccount: '',
// }

// // && = och
// // || = eller

// // för att undvika vissa error (som står som krav) kan du använda
// // metoden isNaN(), du behöver själv testa samt söka efter information om
// // du inte känner igen den.
// const variableName = 10
// isNaN(variableName)

// const outputText = document.createElement('h3')
// outputText.className = 'select'
// document.body.appendChild(outputText)

// // const node = document.createTextNode('This is a text node in h3')
// // outputText.appendChild(node)

// const element = document.getElementById('demo')
// element.appendChild(outputText)

// // varför måste vi använda parseFloat?
// const selectBtn = document.getElementById('Select')
// selectBtn.addEventListener('click', atm)
// function atm() {
//   const message = parseFloat(
//     prompt(
//       'Select:\n 1.accountName:\n 2.Show balance: \n 3.getBalance \n 4.Deposit \n 5.Withdraw \n 6.getAccountName \n 7.accountError \n 8.exitAccount'
//     )
//   )
//   const outputText = document.querySelector('.select')
//   outputText.textContent = 'Click me plz'
//   switch (message) {
//     case 1:
//       outputText.addEventListener('click', function (e) {
//         if (e.target.className === 'select') {
//           outputText.style.backgroundColor = 'grey'
//           outputText.style.border = '3px solid red'
//           outputText.style.textAlign = 'Center'
//           outputText.style.width = '300px'
//           outputText.style.fontSize = '2rem'
//           outputText.innerText = 'Text changed'
//           outputText.style.color = 'yellow'
//         }
//       })
//       break

//     case 2:
//       document.write(`<h2><button onclick="howbalance()">ShowBalance</button>
//         Balance: <p id="balance"></p></h2>`)
//       break
//     case 3:
//       document.write(`<h2> <button onclick="getBalance()">getBalance</button>
//         Current Balance: <p id="current-balance"></p></h2>`)
//       break
//     case 4:
//       document.write(`<h2> Deposit   <h2>$ <span id="depositBalance">0</span></h2>
//         <input id="myBalance" type="number" min="1" onkeypress="return event.charCode >= 48"
//         class="form-control" placeholder="Enter deposit balance"><br>
//         <button onclick="deposit()" id="deposit-btn">Deposit Button</button></h2>
//         `)
//       break
//     case 5:
//       document.write(`<h2>Withdraw</h2>
//         <h2>$ <span id="currentWithdraw">0</span></h2>
//         <input id="withdrawAmount" type="number" class="form-control" placeholder="Enter withdraw amount"><br>
//         <button onclick="withdraw()" id="withdraw-btn" class="btn btn-success">Withdraw Button</button>`)
//       break
//     case 6:
//       document.write(`<button onclick="getAccountName()" id="getAccountName-btn">getAccountName</button>
//         <spn>AccountName: </span> <p id="getAccountName"></p>
//           `)
//       break
//     case 7:
//       document.write(`<button onclick="accountError()">accountError</button>
//         <p id="accountError"></p>`)
//       break
//     case 8:
//       document.write(`<button class="close" onclick="exitAccount()">exitAccount</button>
//         <p id="exitAccount"></p>
//         <h1>Exit</h1>`)
//       break
//     default:
//       alert('Please select between 1 and 8')
//   }
//   // funktion som har huvudansvar för att visa UI baserat på user input
//   // ska inte hantera någon logik alls
//   // du välkjer själv om du vill hantera user input med en switch
//   // eller med if/else statement
// }

// function accountName() {
//   alert(
//     `Welcome ${(document.getElementById('myInput').innerHTML = myInput.value)}`
//   )
//     ? myInput.value
//     : atm()
//   /*  alert(`welcome ${text}`) */
//   return atm()
// }

// function showbalance() {
//   alert((document.getElementById('balance').innerHTML = person.showBalance))

//   return atm()
// }

// function deposit() {
//   alert(
//     (document.getElementById(
//       'depositBalance'
//     ).innerHTML = `Your Deposit ${myBalance.value}`)
//   )
//   /*  alert(`welcome ${number}`) */
//   return atm()
// }
// function withdraw() {
//   alert(
//     (document.getElementById(
//       'currentWithdraw'
//     ).innerHTML = `Your Withdraw ${withdrawAmount.value}`)
//   )
//   /*  alert(`welcome ${number}`) */
//   return atm()
// }
// function getAccountName() {
//   document.getElementById('getAccountName').innerHTML = person.getAccountName
//   console.log('clicked')
//   return atm()
// }

// /* document.getElementById('balance').onclick = function () {
//   alert('error')
// } */

// function getBalance() {
//   document.getElementById('current-balance').innerHTML = person.getBalance
//   return atm()
// }

// function exitAccount() {
//   document.body.innerHTML = alert('Welcome back')
//   return atm()
// }

// // function cakeMaker(butter, milk, egg, chocklate) {
// //   const cake = `A simple cake with ${butter} gram of butters ,${milk} cl of milk, ${egg} egges and ${chocklate} a peice of `
// //   return cake
// // }
// // cakeMaker(100, 20, 3, 1)

// // const yummyCake = cakeMaker(100, 20, 3, 1)
// // alert(yummyCake)

// function hambugare(Meat, bread, tomato, isberg) {
//   const burger = `To make a burger you need ${Meat} gram of meat, ${bread} to pieces, ${tomato} slices of tomato and a bunch of ${isberg}`
//   return burger
// }
// hambugare(200, 'bread', 2, 'isberg')
// const yummyBurger = hambugare(200, 'bread', 2, 'isberg')
// console.log(yummyBurger)

// // function carMaking(Metal, Wheel, Engine) {
// //   const car = `To make a car you need ${Metal} and ${Wheel} wheels and an ${Engine} `
// //   return car
// // }
// // carMaking()
// // const carFinish = carMaking('High Quality', 4, 'Engine')
// // console.log(carFinish)

// // function egg(age1, age2) {
// //   const resEgg = age1 + age2
// //   return resEgg
// // }
// // console.log(egg(5, 20))

// // function slice(breakfast) {
// //   return breakfast / 2
// // }
// // function mySlices(bread, cheese) {
// //   const breadSlice = slice(bread)
// //   const cheeseSlice = slice(cheese)
// //   const sandwich = `My sanwich gott ${breadSlice} and ${cheeseSlice} peices of cheese`
// //   return sandwich
// // }
// // console.log(mySlices(2, 7))
// // // FUNCTION HOISTED
// // hoisted()
// // function hoisted() {
// //   console.log('Hoisetd now also')
// // }
// // // FUNCTION EXPREESION
// // const Hosited = function () {
// //   console.log('function expression')
// // }
// // Hosited()

// // //arrow function expresion

// // const calAge = (birthday) => birthday - 2022
// // const age = calAge(1981)
// // console.log(age)

// // const yearUntilreited = (birthyear) => {
// //   const age = 2022 - birthyear
// //   const retire = 65 - age
// //   return retire
// // }
// // const yearsLeft = yearUntilreited(1981)
// // console.log(`You have ${yearsLeft} years left until you retire`)

// // //withdraw button event handler
// // /* const withdraw_btn = document.getElementById('withdraw-btn')
// // withdraw_btn.addEventListener('click', function () {
// //   const withdrawNumb = getInputNumb('withdraw-amount')

// //   updateSpanTest('current-withdraw', withdrawNumb)
// //   updateSpanTest('current-balance', -1 * withdrawNumb)
// //   //setting up the input field blank when clicked
// //   document.getElementById('withdraw-amount').value = ''
// //   return (value = '')
// // }) */

// // //Deposit

// // /* const deposit_btn = document.getElementById('deposit-btn')
// // deposit_btn.addEventListener('click', function () {
// //   const depositNumb = getInputNumb('deposit-balance')

// //   updateSpanTest('current-deposit', depositNumb)
// //   updateSpanTest('current-balance', 1 * depositNumb)
// //   //setting up the input field blank when clicked
// //   document.getElementById('deposit-balance').value = ''
// // }) */

// // // Get the modal
// // var modal = document.getElementById('myModal')

// // // Get the button that opens the modal
// // var btn = document.getElementById('myBtn')

// // // Get the <span> element that closes the modal
// // var span = document.getElementsByClassName('close')[0]

// // // When the user clicks the button, open the modal
// // /* btn.onclick = function () {
// //   modal.style.display = 'block'
// // } */

// // // When the user clicks on <span> (x), close the modal
// // /* span.onclick = function () {
// //   modal.style.display = 'none'
// // }
// //  */
// // // When the user clicks anywhere outside of the modal, close it
// // window.onclick = function (event) {
// //   if (event.target == modal) {
// //     modal.style.display = 'none'
// //   }
// // }

// // //deposit button event handler

// // //function to parse string input to int
// // function getInputNumb(idName) {
// //   const balance = document.getElementById(idName).value
// //   const balanceNumber = parseFloat(balance)
// //   return balanceNumber
// // }

// // function updateSpanTest(idName, addedNumber) {
// //   //x1.1 updating balance the same way
// //   const current = document.getElementById(idName).innerText
// //   const currentStringToInt = parseFloat(current)

// //   const total = currentStringToInt + addedNumber

// //   //x1.2 setting this value in balance
// //   document.getElementById(idName).innerText = total
// // }
