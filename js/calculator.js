
// trick

function animateMarquee(el, duration) {
    const innerEl = el.querySelector('.marquee__inner');
    const innerWidth = innerEl.offsetWidth;
    const cloneEl = innerEl.cloneNode(true);
    el.appendChild(cloneEl);

    let start = performance.now();
    let progress;
    let translateX;

    requestAnimationFrame(function step(now) {
        progress = (now - start) / duration;

        if (progress > 1) {
            progress %= 1;
            start = now;
        }

        translateX = innerWidth * progress;

        innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        requestAnimationFrame(step);
    });
}


const marquee4 = document.querySelector('#marquee4');

animateMarquee(marquee4, 15000);

//calculations

function calc() {

    //Profit Per Serving
    let selling_price = document.getElementById('selling_price').value;
    selling_price = Number(selling_price);
    let minus_soft_serve = 0.22;
    let profit_per_serving = selling_price - minus_soft_serve;
    profit_per_serving = Number(profit_per_serving);
    document.getElementById('profit_per_serving').innerHTML = `$ ${profit_per_serving}`;

    //Profits Per Day
    let profit_per_day_shown;
    let servings_per_day = document.getElementById('servings_per_day').value;
    servings_per_day = Number(servings_per_day);
    let profit_per_day;
    profit_per_day = Number(profit_per_day);
    if (servings_per_day) {
        profit_per_day = profit_per_serving * servings_per_day;
        profit_per_day_shown = `$ ${profit_per_day}`;
    } else  {
        String(profit_per_day);
        profit_per_day_shown = "Enter number";
    }
    document.getElementById('profit_per_day').innerHTML = profit_per_day_shown;

    //Profits Per Week
    let profit_per_week_shown;
    let open_per_week = document.getElementById('open_per_week').value;
    open_per_week = Number(open_per_week);
    let profit_per_week;
    if (profit_per_day > 0) {
        profit_per_week = profit_per_day * open_per_week;
        profit_per_week_shown = `$ ${profit_per_week}`;
    } else  {
        String(profit_per_week);
        profit_per_week_shown = "";
    }
    document.getElementById('profit_per_week').innerHTML = profit_per_week_shown;


}