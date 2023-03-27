// pobranie danych z HTML

const links = document.querySelectorAll('li a')
const previousHours = document.querySelectorAll('.previousHours')
const currentHours = document.querySelectorAll('.currentHours')
const previousPeriods = document.querySelectorAll('.previousPeriod')


// funkcja resetująca color linków w nawigacji - usunięcie klasy active

const resetActiveClass = () => links.forEach(link => link.classList.remove('active'))

// funkcja obsługująca dodanie klasy active do wybranego linku

const addActiveClass = (e) => {
    e.target.classList.add('active')
}

// funkcja obsługująca zmianę danych po wybraniu opcji

const changeData = async (e) => {
    e.preventDefault(e)

    resetActiveClass()
    addActiveClass(e)

    const response = await fetch("data.json")

    const responseData = await response.json()

    for (let i = 0; i < responseData.length; i++) {
        if (e.target.id === 'daily') {
            previousHours[i].innerHTML = `${responseData[i].timeframes.daily.previous}hrs`;
            currentHours[i].innerHTML = `${responseData[i].timeframes.daily.current}hrs`;
            previousPeriods[i].innerHTML = "Last day - ";
        } else if (e.target.id === 'weekly') {
            previousHours[i].innerHTML = `${responseData[i].timeframes.weekly.previous}hrs`;
            currentHours[i].innerHTML = `${responseData[i].timeframes.weekly.current}hrs`;
            previousPeriods[i].innerHTML = "Last week - ";
        } else if (e.target.id === 'monthly') {
            previousHours[i].innerHTML = `${responseData[i].timeframes.monthly.previous}hrs`;
            currentHours[i].innerHTML = `${responseData[i].timeframes.monthly.current}hrs`;
            previousPeriods[i].innerHTML = "Last month - ";
        }
    }
}

links.forEach(link => {
    link.addEventListener('click', changeData)
})
