var board = document.getElementsByClassName('board')[0], // Игровое поле
		player = document.getElementsByClassName('step_status')[0], // Статус хода
		element, // внешний блок ячейки "cell"
		innerElement, // вложенный класс "inner-cell"
		gamer1 = true, // кто сейчас ходит, по умолчанию это "Х"
		gameTable = [[null, null, null],[null, null, null],[null, null, null]], // матрица игры
		nullCount = 9, // количество оставшихся ходов
		winner = null;

player.innerText = "Сейчас ходит X";

// Генерация игрового поля
for(var i=0; i<9; i++){
	element = document.createElement('div'); // создаем новый блок DIV
	element.classList.add('cell'); // добавляем класс "cell" новому блоку DIV
	
	innerElement = document.createElement('div'); // создаем вложенный блок DIV
	innerElement.classList.add('inner-cell'); // добавляем класс "inner-cell" вложенному блоку DIV
	
	board.appendChild(element);
}