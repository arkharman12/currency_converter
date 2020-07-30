import React from 'react';

function CurrencyRow({ currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) {
    return (
        <div>
            <input type="number" min="1" className="input" value={amount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default CurrencyRow;
