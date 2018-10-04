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
	element = document.createElement('div'); // создаем новый блок DIV соответствующий одной ячейке игрового поля
	element.classList.add('cell'); // добавляем класс "cell" новому блоку DIV
	
	innerElement = document.createElement('div'); // создаем вложенный блок DIV соответствующий "Х" или "О"
	innerElement.classList.add('inner-cell'); // добавляем класс "inner-cell" вложенному блоку DIV
	
	innerElement.onclick = tableClick; // создаем "событие" отвечающее за нажатие мышкой на элемент innerElement; нажатие запускает функцию tableClick
	
	
	/*
			[0,0][0,1][0,2]
			[1,0][1,1][1,2]
			[2,0][2,1][2,2]
			
			x - строка матрицы игры
			y - столбец матрицы
	*/
	
	innerElement.setAttribute('x', parseInt(i / 3).toString());
	innerElement.setAttribute('y', (i % 3).toString());
	
	
	board.appendChild(element);
	element.appendChild(innerElement);
}

function tableClick(){
	// все действия, изменения и расчеты выполняются только если поле "пустое", т.е. на него ранее не совершалось нажатие
	if (this.innerText == '') { // gроверим, является ли поле, на которое мы нажимаем, "пустым"
		// если gamer1 = true, то рисуем в innerElement симол крестика, если нет, то нолика
		this.innerText = gamer1 ? 'X' : 'O';
		
		var x = this.getAttribute('x'); // переменная х получаем значение атрибута innerElement
		var y = this.getAttribute('y'); // переменная y получаем значение атрибута innerElement
		
		gameTable[x][y] = gamer1; // заполняем матрицу игры, первый ход за "Х"-ом
		nullCount--; // понижаем счетчик количества ходов
		
		
	}
}