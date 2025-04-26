async function Exchange() {
    const url = "https://api.exchangerate-api.com/v4/latest/EUR";
    try {
        const response = await fetch(url);
        const data = await response.json();


        if (data && data.rates) {
            const currency = data.rates;
            const suma = document.getElementById("amountInput").value;
            const selectedCurrency = document.getElementById("currencySelect").value;

            if (selectedCurrency in currency) {
                const rata = currency[selectedCurrency];
                const rezultat = suma * rata;
                document.getElementById("result").innerHTML =
                    `${suma} EUR = ${rezultat.toFixed(2)} ${selectedCurrency}`;
            } else {
                document.getElementById("result").innerHTML =
                    `Moneda selectată nu este disponibilă.`;
            }
        }
    } catch (err) {
        console.log(err);
        alert("A apărut o eroare!");
    }
}
