'use strict';

(function () {



var bigPicture = document.querySelector('.big-picture');
var bigPictureButtonClose = document.querySelector('.big-picture__cancel');
var bigPictureImg = bigPicture.querySelector('img');
var bigPictureDescription = bigPicture.querySelector('.social__caption');
var bigPictureComment = bigPicture.querySelector('.social__text');
var bigPictureLike = bigPicture.querySelector('.likes-count');


bigPictureButtonClose.addEventListener('click', function () {
    bigPicture.classList.add('hidden')
});

pictures.addEventListener('click', function () {

    var targetElement = event.target;

    if(targetElement.classList.contains('picture__img')) {
        var parentTargetElement = targetElement.closest('a');
        var commentImg = parentTargetElement.querySelector('.picture__stat--comments');
        var likeImg = parentTargetElement.querySelector('.picture__stat--likes');

        bigPicture.classList.remove('hidden');
        bigPictureImg.src = targetElement.src;
        bigPictureImg.alt = targetElement.alt;
        bigPictureDescription.textContent = targetElement.alt;
        bigPictureComment.textContent = commentImg.textContent;
        bigPictureLike.textContent = likeImg.textContent;
    }});

}());