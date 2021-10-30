'use strict';

const calc = (a, actionId, b) => {
    const actions = ['*', '+', '-', '/', '%', '**'];

    if (a == '' && actionId == '' && b == '')
        return alert("Error! Where are values?")

    if (!actions.includes(actionId)) 
        return alert("Error! Incorrect action id value")

    return alert(eval(a + actionId + b));
}


const createForm = () => {
    const form = document.createElement('form');

    form.innerHTML = `
        <div class="inputWrapper">
            <input placeholder="First value" type="number" id="firstValue">
            <input placeholder="Operator" type="text" id="operator">
            <input placeholder="Second value" type="number" id="secondValue">
        </div>
        <button type="submit">Calc</button>
    `;

    form.onsubmit = (event) => {
        event.preventDefault();

        const actionId = form.querySelector('#operator').value,
                     a = form.querySelector('#firstValue').value,
                     b = form.querySelector('#secondValue').value;

        calc(a, actionId, b);
    }

    document.body.appendChild(form);
}


window.addEventListener('DOMContentLoaded', createForm);