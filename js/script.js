'use strict';

let money, time;



function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }  // Команда isNan возвращает true в том случае, когда в неё попадают не цифры
}
start();


let appData = {
  budget: money,
  date: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
          b = +prompt('Во сколько обойдется?', '');
    
      if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        console.log('error');
        i--;
      }
     
    }
  },

  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1); // Метод т.к он что-то делает со значением, округляет до ближайшего целого числа, () указывается до какого знака после запятой, а также преобразует значение в строковое
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },

  detectLevel: function() {
    if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровент достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },

  checkSavings: function() {
    if (appData.savings == true)   {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
  
          appData.mountIncome = save/100/12*percent;
          alert("Доход в месяц с вашего депозита: " + appData.mountIncome);
    }
  },

  chooseOptExpenses: function() {
    for (let i = 1; i <= 3; i++) {
      appData.optionalExpenses[i] = prompt("Введите статью необязательных расходов", '');
    }
  },
  chooseIncome: function() {
    for (let i = 0; i == 0; i++) {
      let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
      if ( (typeof(items)) === 'string' && items != '' && items != null ) {
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еше?'));
        appData.income.sort();
      } else {
        console.log('error');
        i--;
      }
    }
    
    appData.income.forEach(function(item, i, mass) {
      console.log(`${i + 1}` + ':' + item);
    });
  }
};

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key);
}















