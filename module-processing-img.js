'use strict';

(function () {


// находим полосу уровня применяемого эффекта
var scale = document.querySelector('.img-upload__scale');
//находим кнопки уменьшения и увеличения загружаемого изобрадения
var buttonMinus = document.querySelector('.resize__control--minus');
var buttonPlus = document.querySelector('.resize__control--plus');
// находим поле показывающее размер загружаемого изображения
var sizeInput = document.querySelector('.resize__control--value');
// находим кнопки применения эффектов
var effectButtonNon = document.querySelector('#effect-none');
var effectButtonChrome = document.querySelector('#effect-chrome');
var effectButtonSepia = document.querySelector('#effect-sepia');
var effectButtonMarvin = document.querySelector('#effect-marvin');
var effectButtonPhobos = document.querySelector('#effect-phobos');
var effectButtonHeat = document.querySelector('#effect-heat');
var effectsList = document.querySelector('.effects__list');
// находим фото предпросмотра
var imgPreview = document.querySelector('.img-upload__preview');


// делаем полосу уровня применяемого эффекта невидимой
scale.classList.add('hidden');


// функция для обработчика переключения эффектов

var switchEffects = function(class1, class2) {
    imgPreview.className  = class1;
    imgPreview.classList.add(class2);
    scale.classList.remove('hidden');
};

// функция для обработчика изменения размера загружаемого изображения
// считает и передает свойство transform scale
var transferSizeFactor = function() {
    var scaleindex = sizeIndex/100;
    var styleScale = 'scale'+'('  + scaleindex + ')';
    imgPreview.style.transform = styleScale;
};


// добавляем обработчик для переключения эффектов

effectsList.addEventListener('click', function () {
    if(effectButtonNon.checked) {
        imgPreview.className  = 'img-upload__preview';
        scale.classList.add('hidden');

    }
    if(effectButtonChrome.checked) {
        switchEffects('img-upload__preview','effects__preview--chrome');
    }
    if(effectButtonSepia.checked) {
        switchEffects('img-upload__preview','effects__preview--sepia');
    }
    if(effectButtonMarvin.checked) {
        switchEffects('img-upload__preview','effects__preview--marvin');
    }
    if(effectButtonPhobos.checked) {
        switchEffects('img-upload__preview','effects__preview--phobos');
    }
    if(effectButtonHeat.checked) {
        switchEffects('img-upload__preview','effects__preview--heat');
    }

});

//добовляем обработчик для уменьшения и увеличения загружаемого изображения
var sizeIndex = 100;

buttonMinus.addEventListener('click', function() {
    if(sizeIndex === 25) {
        sizeIndex = 50
    }
    sizeIndex -= 25;
    sizeInput.value = sizeIndex + '%';
    transferSizeFactor();
});

buttonPlus.addEventListener('click', function() {
    if(sizeIndex >= 100) {
        sizeIndex = 75
    }
    sizeIndex += 25;
    sizeInput.value = sizeIndex + '%';
    transferSizeFactor();
});

}());