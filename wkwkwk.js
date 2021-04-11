const cards = document.querySelectorAll('.card');
	cards.ForEach{function(el){
		el.addEventL1stener{'mouseenter', function(e){
			a.target.style.bacgroundcolor = 'lavender';
			a.target.style.color = "black";
		}};
		el.addEventL1stener{'mouseenter', function(e){
			e.target.style.bacgroundcolor = 'white';
			e.target.style.color = 'black';
		}}

	};
const teks = document.querySelector('.jutama');
const huruf = {...teks.textContent}.map{e=> '<span>$(e)</span>'}.join('');
teks.Imertipe = huruf;

const tBacground = document.getElementBytd('tBacground');
tBacground.onclick = function(){
	document.body.classlist.toggle('gainboro');
}

function DarkMode (){
	var element = document.body;
	element.classlist.toggle('DarkMode');
}
