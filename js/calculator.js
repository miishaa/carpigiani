
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


window.onload = function() {
    calcSoftServe();
    calcShake();
    calcBatchFreezer();
};

$('#selling_price, #selling_price_2').bind('keyup', function(){
   let sanitized = $(this).val().replace(/[^0-9.]/g,'');
    $(this).val('$ '+sanitized);
});

$('#servings_per_day, #servings_per_day_2').bind('keyup', function(){
    let sanitized = $(this).val().replace(/[^0-9]/g,'');
    $(this).val(''+sanitized);
});

function calcSoftServe() {

    //Profit Per Serving
    let selling_price = document.getElementById('selling_price').value;
    selling_price = selling_price.substring(1);
    // selling_price = Number(selling_price);
    let minus_soft_serve = 0.22;
    let profit_per_serving;
    profit_per_serving = Number(profit_per_serving);
    let profit_per_serving_shown;
    if(selling_price > 0){
        profit_per_serving = selling_price - minus_soft_serve;
        profit_per_serving_shown = `$ ${profit_per_serving.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else{
        profit_per_serving_shown = "Enter number";
    }

    document.getElementById('profit_per_serving').innerHTML = profit_per_serving_shown;

    //Profits Per Day
    let profit_per_day_shown;
    let servings_per_day = document.getElementById('servings_per_day').value;
    servings_per_day = Number(servings_per_day);
    let profit_per_day;
    profit_per_day = Number(profit_per_day);
    if (profit_per_serving && servings_per_day) {
        profit_per_day = profit_per_serving * servings_per_day;
        profit_per_day_shown =`$ ${profit_per_day.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else  {
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
        profit_per_week_shown = `$ ${profit_per_week.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else  {
        profit_per_week_shown = "";
    }
    document.getElementById('profit_per_week').innerHTML = profit_per_week_shown;

    //Profits Per Month
    let profit_per_month_shown;
    let open_per_month = document.getElementById('open_per_month').value;
    open_per_month = Number(open_per_month);
    let profit_per_month;
    if (profit_per_week) {
        profit_per_month = profit_per_week * open_per_month;
        profit_per_month_shown = `$ ${profit_per_month.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else  {
        profit_per_month_shown = "";
    }
    document.getElementById('profit_per_month').innerHTML = profit_per_month_shown;

    //Profits Per Year
    let profit_per_year_shown;
    let open_per_year = document.getElementById('open_per_year').value;
    open_per_year = Number(open_per_year);
    let profit_per_year;
    if (profit_per_month) {
        profit_per_year = profit_per_month * open_per_year;
        profit_per_year_shown = `$ ${profit_per_year.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else  {
        profit_per_year_shown = "";
    }
    document.getElementById('profit_per_year').innerHTML = profit_per_year_shown;

}

function calcShake() {

    //Profit Per Serving
    let selling_price = document.getElementById('selling_price_2').value;
    selling_price = selling_price.substring(1);
    // selling_price = Number(selling_price);
    let minus_shake = 0.47;
    let profit_per_serving;
    profit_per_serving = Number(profit_per_serving);
    let profit_per_serving_shown;
    if(selling_price > 0){
        profit_per_serving = selling_price - minus_shake;
        profit_per_serving_shown = `$ ${profit_per_serving.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else{
        profit_per_serving_shown = "Enter number";
    }
    document.getElementById('profit_per_serving_2').innerHTML = profit_per_serving_shown;

    //Profits Per Day
    let profit_per_day_shown;
    let servings_per_day = document.getElementById('servings_per_day_2').value;
    servings_per_day = Number(servings_per_day);
    let profit_per_day;
    profit_per_day = Number(profit_per_day);
    if (profit_per_serving && servings_per_day) {
        profit_per_day = profit_per_serving * servings_per_day;
        profit_per_day_shown =`$ ${profit_per_day.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else  {
        profit_per_day_shown = "Enter number";
    }
    document.getElementById('profit_per_day_2').innerHTML = profit_per_day_shown;

    //Profits Per Week
    let profit_per_week_shown;
    let open_per_week = document.getElementById('open_per_week_2').value;
    open_per_week = Number(open_per_week);
    let profit_per_week;
    if (profit_per_day > 0) {
        profit_per_week = profit_per_day * open_per_week;
        profit_per_week_shown = `$ ${profit_per_week.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else  {
        profit_per_week_shown = "";
    }
    document.getElementById('profit_per_week_2').innerHTML = profit_per_week_shown;

    //Profits Per Month
    let profit_per_month_shown;
    let open_per_month = document.getElementById('open_per_month_2').value;
    open_per_month = Number(open_per_month);
    let profit_per_month;
    if (profit_per_week) {
        profit_per_month = profit_per_week * open_per_month;
        profit_per_month_shown = `$ ${profit_per_month.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else  {
        profit_per_month_shown = "";
    }
    document.getElementById('profit_per_month_2').innerHTML = profit_per_month_shown;

    //Profits Per Year
    let profit_per_year_shown;
    let open_per_year = document.getElementById('open_per_year_2').value;
    open_per_year = Number(open_per_year);
    let profit_per_year;
    if (profit_per_month) {
        profit_per_year = profit_per_month * open_per_year;
        profit_per_year_shown = `$ ${profit_per_year.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else  {
        profit_per_year_shown = "";
    }
    document.getElementById('profit_per_year_2').innerHTML = profit_per_year_shown;

}

function calcBatchFreezer(){


    let servings_per_day_3 = document.getElementById('servings_per_day_3').value;
    servings_per_day_3 = Number(servings_per_day_3);

    let price_per_gallon = document.getElementById('price_per_gallon').value;
    price_per_gallon = Number(price_per_gallon)

    let cost_per_serving = document.getElementById('cost_per_serving').value;
    cost_per_serving = Number(cost_per_serving);


    let serving_cost = price_per_gallon / 50 + cost_per_serving;
    document.getElementById('serving_cost').innerHTML = `$ ${serving_cost.toFixed(2)}`;

    let daily_cost = serving_cost * servings_per_day_3;
    document.getElementById('daily_cost').innerHTML = `$ ${daily_cost.toFixed(2)}`;

    let daily_sales = (2.99 - serving_cost) * servings_per_day_3 + daily_cost;
    document.getElementById('daily_sales').innerHTML = `$ ${daily_sales.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

    let profit_per_day_3 = (servings_per_day_3 * 2.99) - daily_cost;
    document.getElementById('profit_per_day_3').innerHTML = `$ ${profit_per_day_3.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

    let profit_per_month_3 = profit_per_day_3 * 31;
    document.getElementById('profit_per_month_3').innerHTML = `$ ${profit_per_month_3.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

    let profit_per_year_3 = profit_per_day_3 * 365;
    document.getElementById('profit_per_year_3').innerHTML = `$ ${profit_per_year_3.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}



