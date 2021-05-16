const countdown = () => {
    let targetdate = new Date("Jun 20, 2021 00:00:00").getTime();
    let date = new Date().getTime();

    const gap = targetdate - date;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = 24 * hours;

    const counter_day = Math.floor(gap / days);
    const counter_hours = Math.floor((gap % days)/hours);
    const counter_minutes = Math.floor((gap % hours)/minutes);
    const counter_seconds = Math.floor((gap % minutes)/seconds);

    document.querySelector('.days').innerText = counter_day;
    document.querySelector('.hours').innerText = counter_hours;
    document.querySelector('.minutes').innerText = counter_minutes;
    document.querySelector('.seconds').innerText = counter_seconds;
}

export const counter = () => {
    setInterval(countdown,1000);
}