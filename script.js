let turn = 'X';
let gameover = false;
let music = new Audio('music.mp3')

// Function to change turn:
const changeTurn = () => {
	return turn === 'X' ? 'O' : 'X';
};

// Function to check win:
const checkWin = () => {
	let boxtexts = document.getElementsByClassName('boxtext');
	const wins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	wins.forEach(e => {
		if (
			boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
			boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
			boxtexts[e[2]].innerText !== ''
		) {
			document.querySelector('.winner').innerText = boxtexts[e[0]].innerText + ' Won';
			document.querySelector('.gif_Winner').style.width = '100%'
			document.querySelector('.gif_Winner').style.height = '200%'
			gameover = true;
			music.play();
		}
	});
};

// Main Game logic:
// music.play();
let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach((element) => {
	let boxtext = element.querySelector('.boxtext');
	element.addEventListener('click', () => {
		if (boxtext.innerText === '') {
			boxtext.innerText = turn;
			turn = changeTurn();
			checkWin();
			if(!gameover){
				document.getElementsByClassName('winner')[0].innerText = 'Turn For ' + turn;

			}

		}
	});
});


// Reset Button:
let reset = document.getElementById('button');
reset.addEventListener('click', ()=>{
	// Use array.from to get all the elements

	let boxtexts = document.querySelectorAll('.boxtext');
	Array.from(boxtexts).forEach((element) => {
		element.innerText = ''
	})
	turn = 'X'
	gameover = false;
		document.getElementsByClassName('winner')[0].innerText = 'Turn For ' + turn;
	music.pause();
	document.querySelector('.gif_Winner').style.width = '0%'

})