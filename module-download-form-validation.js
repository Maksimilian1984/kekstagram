'use strict';

(function () {


// находим поле ввода хэштега
var hashtagsInput = document.querySelector('.text__hashtags');
// находим форму загрузки нового изображения
var imgUploadForm = document.querySelector('.img-upload__form');
var imgUploadButton = document.querySelector('.img-upload__submit');

// функуия для разделения строки хэштегов и записи в массив хэштегов

var separateHashtags = function () {
    var strinHashtags = hashtagsInput.value;

    var arrayHashtags = strinHashtags.split(' ');

    return arrayHashtags;
};

// функция для поиска совпадений элементов в массиве
var lookingMatches = function (array) {
    var coincidenceBoolean = false;
    for(var i=0; i < array.length-1; i++) {
        for(var j=i+1; j < array.length; j++) {
            if(array[i] === array[j]) {
                coincidenceBoolean = true;
                break
            } else {
                coincidenceBoolean = false;
            }
        }
        if(coincidenceBoolean) break
    }
    return coincidenceBoolean
};

// функция для подсчета количества символов в хэштеге и сравнения с максимальным допустимым количеством
var countLetter = function (array) {
    var letterBoolean = false;

    for(var i=0; i<array.length; i++) {
        if(array[i].length > 20) {
            letterBoolean = true;
            break
        }
    }
    return letterBoolean
};

// функция для проверки наличия и положения знака #
var checkHash = function (array) {
    var regexp = /#/;
    for(var i=0; i<array.length; i++) {

        if (array[i].search(regexp) < 0 ) {
            console.log(array[i].search(regexp));
            return array[i].search(regexp);
        }
        if (array[i].search(regexp) > 0 ) {
            console.log(array[i].search(regexp));
            return array[i].search(regexp);
        }
        var  zero = array[i].search(regexp)
    }
    console.log(zero);
    return zero;
};

// добовляем обработчик с валидацией поля ввода хэштега
imgUploadButton.addEventListener('click' , function () {
    var  hashIndex = checkHash(separateHashtags());

    if(separateHashtags().length > 5) {
        hashtagsInput.setCustomValidity('не более 5 хэштегов');
    } else {
        if(lookingMatches(separateHashtags())) {
            hashtagsInput.setCustomValidity('хэштеги не должны повторятся');
        }  else {  if(countLetter(separateHashtags())) {
            hashtagsInput.setCustomValidity('хэштеги не должны превышать 20 символов');
        } else {
            if(countLetter(separateHashtags())) {
                hashtagsInput.setCustomValidity('хэштеги не должны превышать 20 символов');
            } else {
                if( !(hashtagsInput.value === '') && hashIndex < 0 ) {
                    hashtagsInput.setCustomValidity('вы не поставили знак #');
                } else {
                    if(hashIndex > 0 ) {
                        hashtagsInput.setCustomValidity('знак # должен стоять вначале хэштега');
                    } else {
                        hashtagsInput.setCustomValidity('');
                    }
                }
            }
        }
        }
    }
});
}());