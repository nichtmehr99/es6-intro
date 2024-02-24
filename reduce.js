const colletedMoney = [30, 55, 70, 65, 45];

const money = colletedMoney.reduce(
  (moneyBeforeCollecting, moneyAfterCollected) =>
    moneyBeforeCollecting + moneyAfterCollected,
  0
);
console.log(money)
