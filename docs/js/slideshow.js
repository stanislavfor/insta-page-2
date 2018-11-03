$(document).ready(function(){

	var slideIndex = 0;

	showPhotos();

	function showPhotos(){
		var i;
		var slides = $('.photo img');
		console.log(slides);
		console.log(slides.length);


// Запускаем цикл для скрытия фотографий
		for (i=0; i < slides.length; i++){
			console.log(i);
			$(slides[i]).hide();
		}

// Считаем индекс фотографии, которая показывается на станице
		slideIndex++;
		console.log(slideIndex);
		if (slideIndex > slides.length){
			slideIndex = 1
		}
// Обнуляем индекс фотографии, возвращаемся на начало списка
		$(slides[slideIndex-1]).show();
		
// Скорость показа фотослайдов
		setTimeout(showPhotos, 900);


	}

});