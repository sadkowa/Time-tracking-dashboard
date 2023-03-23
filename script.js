// dane

const dailyData = [work = { current: 5, previous: 7 },
play = { current: 1, previous: 2 },
study = { current: 0, previous: 1 },
exercise = { current: 1, previous: 1 },
social = { current: 1, previous: 3 },
selfcare = { current: 0, previous: 1 }]

const weeklyData = [work = { current: 32, previous: 36 },
play = { current: 10, previous: 8 },
study = { current: 4, previous: 7 },
exercise = { current: 4, previous: 5 },
social = { current: 5, previous: 10 },
selfcare = { current: 2, previous: 2 }]

const monthlyData = [work = { current: 103, previous: 128 },
play = { current: 23, previous: 29 },
study = { current: 13, previous: 19 },
exercise = { current: 11, previous: 18 },
social = { current: 21, previous: 23 },
selfcare = { current: 7, previous: 11 }]


// pobranie danych z HTML

const links = document.querySelectorAll('li a')
const previousHours = document.querySelectorAll('.previousHours')
const currentHours = document.querySelectorAll('.currentHours')
const previousPeriods = document.querySelectorAll('.previousPeriod')


// funkcja resetująca color linków w nawigacji

const resetLinkStyle = () => links.forEach(link => link.style.color = "hsl(236, 100%, 87%)")


// funkcja, która obsługuje zmianę wyświetlania godzin w zależności czy daily, weekly czy monthly

const changeDisplayData = (data, period) => {
    for (let i = 0; i < previousHours.length; i++) {
        previousHours[i].innerHTML = `${data[i].previous}hrs`;
        currentHours[i].innerHTML = `${data[i].current}hrs`;
        previousPeriods[i].innerHTML = period;
    }
}

// funkcja, która jest wywoływana gdy zostanie kliknięty link (w środku reset styli, wywołanie changeDisplayData)

const changeLink = (e) => {
    e.preventDefault();
    resetLinkStyle()

    e.target.style.color = 'white'

    if (e.target.id === 'weekly') { changeDisplayData(weeklyData, previousPeriod = 'Last week - ') }
    else if (e.target.id === 'daily') { changeDisplayData(dailyData, previousPeriod = 'Last day - ') }
    else if (e.target.id === 'monthly') { changeDisplayData(monthlyData, previousPeriod = 'Last Month - ') }
}

// obsługa nawigacji

links.forEach(link => {
    link.addEventListener('click', changeLink)
})




