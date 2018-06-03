var financial_accounts = new Vue({
    el: '#financial_accounts',
    data: {
        selectedA: [],
        accounts: [
            {
                "id": 1,
                "created_at": "03/30/2018",
                "name": "TD main",
                "color": "primary",
                "balance": "$1,000.00",
                "frozen": "TRUE"
            },
            {
                "id": 2,
                "created_at": "03/31/2018",
                "name": "TD credit",
                "color": "secondary",
                "balance": "-$200.00",
                "frozen": "FALSE"
            },
            {
                "id": 3,
                "created_at": "03/31/2018",
                "name": "Scotia movies",
                "color": "danger",
                "balance": "$250.00",
                "frozen": "TRUE"
            },
            {
                "id": 4,
                "created_at": "03/31/2018",
                "name": "Savings",
                "color": "info",
                "balance": "$1,000,000.00",
                "frozen": "TRUE"
            },
            {
                "id": 5,
                "created_at": "03/31/2018",
                "name": "Honey Pot",
                "color": "success",
                "balance": "$4,500.00",
                "frozen": "TRUE"
            }
        ]
    }
})