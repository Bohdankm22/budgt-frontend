var wallet_balance = new Vue ({
    el: '#wallet_balance',
    data: {
        wallet_balance: "$99,900.00"
    }
})

var transactions = new Vue({
    el: '#transactions',
    filters: {
        currency(value) {
            return value.toFixed(2);
        }
    },
    mounted() {
        this.transactionsByDate = this.transactions.reduce(function (result, current) {
            result[current.date] = result[current.date] || [];
            result[current.date].push(current);
            return result;
        }, {})
    },
    data: {
        selectedT: [],
        transactionValue: [],
        transactionsByDate: [],
        categories: [
            {
                name: "Honeypot",
                icon: "honeypot.png"
            },{
                name: "Bills",
                icon: "bill.png"
            },{
                name: "Transport",
                icon: "car.png"
            }, {
                name: "Groceries",
                icon: "groceries.png"
            }, {
                name: "Eating Out",
                icon: "cutlery.png"
            }, {
                name: "Pets",
                icon: "dog.png"
            }, {
                name: "Fun",
                icon: "movies.png"
            }, {
                name: "Health",
                icon: "health.png"
            }, {
                name: "Holidays",
                icon: "holiday.png"
            }, {
                name: "Shopping",
                icon: "shopping.png"
            }
        ],
        transactions: [
            {
                "id": 52,
                "date": "03/11/2018",
                "name": "POPULAR LUBE",
                "amount": -35,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 50,
                "date": "03/12/2018",
                "name": "STAPLES STORE #229",
                "amount": -7.33,
                "tags": "Shopping",
                "category": "Shopping",
                "category_icon": "shopping.png"
            },
            {
                "id": 53,
                "date": "03/12/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "amount": -20,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 30,
                "date": "03/14/2018",
                "name": "METRO #065",
                "amount": -7.47,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 1,
                "date": "03/15/2018",
                "name": "APPLE STORE #R208",
                "amount": -28.25,
                "tags": "Bills",
                "category": "Bills",
                "category_icon": "bill.png"
            },
            {
                "id": 2,
                "date": "03/15/2018",
                "name": "PAYMENT - THANK YOU",
                "amount": 950,
                "tags": "Bills",
                "category": "Bills",
                "category_icon": "bill.png"
            },
            {
                "id": 9,
                "date": "03/15/2018",
                "name": "KRAZY ROLL",
                "amount": -27.12,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 31,
                "date": "03/15/2018",
                "name": "SHOPPERS DRUGMART 0861",
                "amount": -12.86,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 10,
                "date": "03/16/2018",
                "name": "BURRITOZ",
                "amount": -8.48,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 32,
                "date": "03/16/2018",
                "name": "METRO #065",
                "amount": -8.48,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 33,
                "date": "03/16/2018",
                "name": "SHOPPERS DRUG MART #1421",
                "amount": -6.53,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 11,
                "date": "03/18/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "amount": -14.63,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 34,
                "date": "03/18/2018",
                "name": "METRO #065",
                "amount": -5.99,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 35,
                "date": "03/18/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "amount": -21.17,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 49,
                "date": "03/18/2018",
                "name": "INFINITY HEALTH CENTRE",
                "amount": -90.4,
                "tags": "Health",
                "category": "Health",
                "category_icon": "health.png"
            },
            {
                "id": 3,
                "date": "03/19/2018",
                "name": "PAYMENT - THANK YOU",
                "amount": 300,
                "tags": "Bills",
                "category": "Bills",
                "category_icon": "bill.png"
            },
            {
                "id": 36,
                "date": "03/19/2018",
                "name": "FORTINO'S (UPPER MIDDL",
                "amount": -6.77,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 4,
                "date": "03/20/2018",
                "name": "NETFLIX.COM",
                "amount": -10.99,
                "tags": "Bills",
                "category": "Bills",
                "category_icon": "bill.png"
            },
            {
                "id": 12,
                "date": "03/20/2018",
                "name": "MCDONALD'S #40065",
                "amount": -10.8,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 13,
                "date": "03/20/2018",
                "name": "RESTAURANT SULIKO",
                "amount": -107.66,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 37,
                "date": "03/20/2018",
                "name": "A&W #4580 APPLEBY LINE",
                "amount": -4.19,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 14,
                "date": "03/21/2018",
                "name": "TIM HORTONS 0750 QTH",
                "amount": -8.67,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 54,
                "date": "03/21/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "amount": -1.8,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 15,
                "date": "03/22/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "amount": -14.63,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 16,
                "date": "03/22/2018",
                "name": "TIM HORTONS 0750 QTH",
                "amount": -3.55,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 38,
                "date": "03/22/2018",
                "name": "METRO #065",
                "amount": -13.91,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 39,
                "date": "03/22/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "amount": -62.2,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 40,
                "date": "03/23/2018",
                "name": "METRO #065",
                "amount": -7.91,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 55,
                "date": "03/23/2018",
                "name": "GOPARK MGT.(ON) LOT 12-31",
                "amount": -14,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 56,
                "date": "03/23/2018",
                "name": "TORONTO PARKING AUTHORITY",
                "amount": -0.25,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 41,
                "date": "03/25/2018",
                "name": "METRO #065",
                "amount": -4.98,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 17,
                "date": "03/26/2018",
                "name": "BURRITOZ",
                "amount": -10.44,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 57,
                "date": "03/26/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "amount": -20,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 58,
                "date": "03/26/2018",
                "name": "TORONTO PARKING AUTHORITY",
                "amount": -2,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 59,
                "date": "03/27/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "amount": -30,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 60,
                "date": "03/27/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "amount": -1.91,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 18,
                "date": "03/28/2018",
                "name": "TIM HORTONS 0750 QTH",
                "amount": -3.55,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 42,
                "date": "03/28/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "amount": -10.26,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 5,
                "date": "03/29/2018",
                "name": "PAYMENT - THANK YOU",
                "amount": 700,
                "tags": "Bills",
                "category": "Bills",
                "category_icon": "bill.png"
            },
            {
                "id": 61,
                "date": "03/29/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "amount": -60,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 19,
                "date": "03/30/2018",
                "name": "RESTAURANT SULIKO",
                "amount": -44.7,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 20,
                "date": "03/30/2018",
                "name": "YELLOW CUP CAFE LTD",
                "amount": -24.54,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 43,
                "date": "03/30/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "amount": -14.66,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 21,
                "date": "03/31/2018",
                "name": "CREPE ESCAPE",
                "amount": -22.6,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 22,
                "date": "03/31/2018",
                "name": "PANERA BREAD 5005",
                "amount": -18.06,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 23,
                "date": "03/31/2018",
                "name": "STARBUCKS #28081#",
                "amount": -15,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 44,
                "date": "03/31/2018",
                "name": "BIG APPLE",
                "amount": -27.48,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 45,
                "date": "03/31/2018",
                "name": "METRO #065",
                "amount": -12.53,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 51,
                "date": "03/31/2018",
                "name": "BEST BUY #938",
                "amount": -33.89,
                "tags": "Shopping",
                "category": "Shopping",
                "category_icon": "shopping.png"
            },
            {
                "id": 62,
                "date": "03/31/2018",
                "name": "SHELL 680 THE QUEENSWAY",
                "amount": -80,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 6,
                "date": "04/01/2018",
                "name": "ACADEMY OF MUSIC",
                "amount": -133,
                "tags": "Bills",
                "category": "Bills",
                "category_icon": "bill.png"
            },
            {
                "id": 24,
                "date": "04/02/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "amount": -14.63,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 25,
                "date": "04/02/2018",
                "name": "TIM HORTONS 0750 QTH",
                "amount": -3.55,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 26,
                "date": "04/03/2018",
                "name": "BURRITOZ",
                "amount": -10.44,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 27,
                "date": "04/04/2018",
                "name": "KRAZY ROLL",
                "amount": -25.99,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 46,
                "date": "04/04/2018",
                "name": "METRO #065",
                "amount": -18.73,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 28,
                "date": "04/05/2018",
                "name": "SUNNY MORNING",
                "amount": -29.87,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 47,
                "date": "04/05/2018",
                "name": "METRO #065",
                "amount": -21.01,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 63,
                "date": "04/05/2018",
                "name": "PEARSON PARKING T3",
                "amount": -6,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 64,
                "date": "04/05/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "amount": -50,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 65,
                "date": "04/05/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "amount": -1.91,
                "tags": "Transport",
                "category": "Transport",
                "category_icon": "car.png"
            },
            {
                "id": 29,
                "date": "04/06/2018",
                "name": "TIM HORTONS 0750 QTH",
                "amount": -13.75,
                "tags": "Eating Out",
                "category": "Eating Out",
                "category_icon": "cutlery.png"
            },
            {
                "id": 7,
                "date": "04/07/2018",
                "name": "PAYPAL *THINKRACEIN",
                "amount": -240,
                "tags": "Bills",
                "category": "Bills",
                "category_icon": "bill.png"
            },
            {
                "id": 48,
                "date": "04/07/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "amount": -26.91,
                "tags": "Groceries",
                "category": "Groceries",
                "category_icon": "groceries.png"
            },
            {
                "id": 8,
                "date": "04/09/2018",
                "name": "PAYMENT - THANK YOU",
                "amount": 300,
                "tags": "Bills",
                "category": "Bills",
                "category_icon": "bill.png"
            }
        ]
    },
    methods: {
        
    }
})