function togglePopup(id = null) {
    const popupWindow = $('#Popup');
    const popupTeasers = $('.popup-teaser');

    if (popupWindow.hasClass('closed')) {
        // Open the popup
        popupWindow.removeClass('closed').css('opacity', 0).animate({ opacity: 1 }, 300);

        // Hide all teaser sections first
        popupTeasers.addClass('hidden');

        // Show the specific section by ID if provided
        if (id) {
            $(`#${id}`).removeClass('hidden');
        }
    } else {
        // Close the popup with fade-out effect
        popupWindow.animate({ opacity: 0 }, 300, function () {
            $(this).addClass('closed');
            popupTeasers.addClass('hidden'); // Hide all teaser sections when closing
        });
    }
}
