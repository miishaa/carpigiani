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
const marquee5 = document.querySelector('#marquee5');


animateMarquee(marquee5, 10000);



//Validation
// Wait for the DOM to be ready
$(function() {
    $("#form").validate({
        onfocusout: false,
        showErrors: false,
        errorElement: "label",
        wrapper: "li",
        invalidHandler: function(event, validator) {
            // 'this' refers to the form
            var errors = validator.numberOfInvalids();
            if (errors) {
                $(".lets-chat__form").addClass('error');//add class to parent
            } else {
                $(".lets-chat__form").removeClass('error');
                alert('success');
            }
        },
        submitHandler: function() { alert("Submitted!") },
        errorPlacement: function(error,element) {
            return true;  // Don't show error
        },
        rules: {
            firstname: {
                required: true,
                minlength: 2,
            },
            lastname: {
                required: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true
            },
            phone: {
              required: true,
              phone: true
            },
            city: {
                required: true,
                minlength: 4
            },
            country: {
                required: true
            },
            state: {
                required: true
            },
            message: {
                required: true,
                minlength: 5
            },
            checkbox1: {
                required: true
            },
            checkbox3: {
                required: true
            }
        },
    });
});

//scrollbar

const ps = new
PerfectScrollbar('#state', {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
});

