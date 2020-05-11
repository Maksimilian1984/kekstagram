'use strict';


(function () {
// находим окно обработки изображения
var imgUploadWindow = document.querySelector('.img-upload__overlay');
// находим поле выбора загружаемого файла
var imgFileInput = document.querySelector('.img-upload__input');
// находим кнопку закрытия формы загрузки фото
var imgButtonUploadClose = document.querySelector('.img-upload__cancel');
// находим фото предпросмотра
var imgPreview = document.querySelector('.img-upload__preview');
// находим поле ввода хэштега
var hashtagsInput = document.querySelector('.text__hashtags');


// функция для закрытия окна загрузки изображения по нажатию на  Esc
    var onCloseImgFileInputEsc =  function(evt) {
        if((evt.keyCode === 27) && !(document.activeElement === hashtagsInput)) {
            imgUploadWindow.classList.add('hidden');
        }
    };

//  обработчик открытие окна загрузки фото
    imgFileInput.addEventListener('change', function() {
        imgUploadWindow.classList.remove('hidden');
        document.addEventListener('keydown', onCloseImgFileInputEsc);

    });

// закрвываем окно загрузки фото по клику на кнопку закрытия
    imgButtonUploadClose.addEventListener('click', function () {
        imgUploadWindow.classList.add('hidden');
        imgFileInput.value = '';
        imgPreview.style.transform = '';
        document.removeEventListener('keydown', onCloseImgFileInputEsc);

    });


}());