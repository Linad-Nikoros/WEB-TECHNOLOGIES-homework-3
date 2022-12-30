

const CelsiusTemp = Number.parseInt(prompt("Введите температуру в градусах Цельсия:"))

const FahrenheitTemp = Math.round(9/5 * CelsiusTemp +32)

alert( `Цельсий: ${CelsiusTemp} , Фаренгейт: ${FahrenheitTemp}`)
