function prevSlide() {
    var current = jQuery( '#codeslides .current' ),
        prev = current.prev();
    if ( prev.length ) {
        prev.addClass( 'current' );
        current.removeClass( 'current' );
    }
}

function nextSlide() {
    var current = jQuery( '#codeslides .current' ),
        next = current.next();
    if ( next.length ) {
        next.addClass( 'current' );
        current.removeClass( 'current' );
    }
}

function prevExample() {
    console.log("prevExample");
}

function nextExample() {
    console.log("nextExample");
}

function init($) {
    $( '#codeslides section:first-child' ).addClass( 'current' );
    $(document).keydown(function(e) {
            // The key codes are numpad numbers
        switch(e.keyCode) {
            case 100: // left
                prevSlide();
                break;

            case 104: // up
                prevExample();
                break;

            case 102: // right
                nextSlide();
                break;

            case 98: // down
                nextExample();
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
}

$(init);
