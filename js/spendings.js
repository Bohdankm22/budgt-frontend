var spendings_snippet = new Vue({
    el: '#spendings_snippet',
    data: {
        spent_this_month: "$9,310.00",
        vs_avg_this_month: "-$56.00",
    }
});

var categories = new Vue({
    el: "#categories",
    methods: {
        totalSpent: function () {
            var total_spent = 0
            this.spendings.forEach(spending => {
                total_spent += spending.amount
            });
            return total_spent
            this.total = total_spent
        },
        progressWidth: function (s) {
            // var persent = s.amount / this.total * 100
            var percent_value = s.amount / this.totalSpent() * 100

            return percent_value + "25%"
        }
    },
    data: {
        spendings: [
            { "category": "Eating Out", "amount": -3000.00, "category_icon": "cutlery.png" },
            { "category": "Transport", "amount": -3000.00, "category_icon": "car.png" },
            { "category": "Shopping", "amount": -2000.00, "category_icon": "shopping.png" },
            { "category": "Groceries", "amount": -600.00, "category_icon": "groceries.png" },
            { "category": "Bills", "amount": -200.00, "category_icon": "bill.png" },
            { "category": "Health", "amount": -110.00, "category_icon": "health.png" },
            { "category": "Fun", "amount": -300.00, "category_icon": "movies.png" },
            { "category": "Pets", "amount": -80.00, "category_icon": "dog.png" },
            { "category": "Holidays", "amount": -20.0, "category_icon": "holiday.png" }
        ],
        total: 0
    }
});