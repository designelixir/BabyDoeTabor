var titles = [
    'Volume I - Horace and Augusta Teaser',
    'Volume II - Elizabeth McCourt "Baby" Doe Teaser',
    'Volume III - Wealth, Politics and Scandal Teaser',
    'Volume IV - The Best of Times Demands Repentance Teaser'
];

var videos = [
    'videos/Tabor-Vol-1-Website.mp4',
    'videos/Tabor-Vol-2-Website.mp4',
    'videos/Tabor-Vol-3-Website.mp4',
    'videos/Tabor-Vol-4-Website.mp4'
];

function togglePopup(index) {
    const popupWindow = $('#Popup');
    const popupTeaser = $('.popup-teaser');
    const videoElement = $('#Popup video');
    const popupTitle = $('#popupTitle');

    if (popupWindow.hasClass('closed')) {
        // Open the popup
        popupWindow.removeClass('closed').css('opacity', 0).animate({ opacity: 1 }, 300);

        // Set the title and video source using the provided index
        popupTitle.text(titles[index]);
        videoElement.attr('src', videos[index]);

        // Show the popup teaser
        popupTeaser.removeClass('hidden');
    } else {
        // Close the popup with fade-out effect
        popupWindow.animate({ opacity: 0 }, 300, function () {
            $(this).addClass('closed');

            // Remove the title and video source when closing
            popupTitle.text('');
            videoElement.attr('src', '');
        });
    }
}
