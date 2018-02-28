// PLEASE DON'T change function name
        module.exports = function makeExchange(currency) {

            var numberOf50 = 0,
                numberOf25 = 0,
                numberOf10 = 0,
                numberOf5 = 0,
                numberOf1 = 0;

            var reminder = 0;
            var inputNumber = currency;
            var coinsNumber = {};

            if (inputNumber <= 0) {
                console.log(coinsNumber);
                return (coinsNumber);
            } else if (inputNumber >= 10000) {
                coinsNumber.error = "You are rich, my friend! We don't have so much coins for exchange";
                console.log(coinsNumber);
                return coinsNumber;
            } else {
                numberOf50 = Math.floor(inputNumber / 50);
                reminder = inputNumber % 50;

                numberOf25 = Math.floor(reminder / 25);
                reminder = reminder % 25;

                numberOf10 = Math.floor(reminder / 10);
                reminder = reminder % 10;

                numberOf5 = Math.floor(reminder / 5);
                reminder = reminder % 5;

                numberOf1 = Math.floor(reminder / 1);

                if (numberOf50 > 0) {
                    coinsNumber.H = numberOf50;
                };
                if (numberOf25 > 0) {
                    coinsNumber.Q = numberOf25;
                };
                if (numberOf10 > 0) {
                    coinsNumber.D = numberOf10;
                };
                if (numberOf5 > 0) {
                    coinsNumber.N = numberOf5;
                };
                if (numberOf1 > 0) {
                    coinsNumber.P = numberOf1;
                };

                console.log(coinsNumber);

                return coinsNumber;
            }
        }