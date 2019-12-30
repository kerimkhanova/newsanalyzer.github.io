const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
export const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const days = ["вс", "пн", "вт", "ср", "чт", "пт", " сб"];
const today = new Date();
const seventhDay = new Date(today);


export function formatDate(date) {

    date = `${date.getDate()}, ${days[date.getDay()]}`;
    return date
};

export function transformateDate(date) {

    date = `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}`;
    return date
};

function transformateDate2(date) {

    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return date
};

seventhDay.setDate(today.getDate() - 6)
export const result0 = transformateDate2(today);
export const result6 = transformateDate2(seventhDay);