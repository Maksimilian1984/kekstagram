'use strict';

var usersPhotos = [];
var usersComments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в рукахи у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат кота у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var photosDescription = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'
];

var pictures = document.querySelector('.pictures');



var getRandomNumberBeth = function (min, max) {
    var randomNumberBeth = Math.floor((Math.random()) * (max - min + 1) + min);
    return randomNumberBeth;
};

var getRandomNumber = function (array) {
    var randomNumber = Math.floor(Math.random()*array.length);
    return randomNumber;
}

var createObject = function () {
    var urlPhoto ='photos/'+(i+1)+'.jpg';
    var likePhoto = getRandomNumberBeth(15, 200);
    var commentPhoto = usersComments[getRandomNumber(usersComments)];
    var descriptionPhoto = photosDescription[getRandomNumber(photosDescription)];

    return {
         urlP: urlPhoto,
         likes: likePhoto,
         comment: commentPhoto,
         descriptionPhoto: descriptionPhoto
    };
};

var createPhotoPost = function (arrayObject) {
    var template = document.querySelector('#picture').content.querySelector('.picture__link');
    var photoPost = template.cloneNode(true);
    var photoImg = photoPost.querySelector('.picture__img');
    var postComment = photoPost.querySelector('.picture__stat--comments');
    var postLikes = photoPost.querySelector('.picture__stat--likes');
    photoImg.alt = arrayObject[i].descriptionPhoto;
    photoImg.src = arrayObject[i].urlP;
    postComment.textContent = arrayObject[i].comment;
    postLikes.textContent = arrayObject[i].likes;

    pictures.appendChild(photoPost);
};


for (var i=0; i<=25; i++) {
    usersPhotos[i] = createObject();

    createPhotoPost(usersPhotos);
}

