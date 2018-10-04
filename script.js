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
		
		// задаем условия окончания игры
		if ((gameTable[x][0] === gamer1 && gameTable[x][1] === gamer1 && gameTable[x][2] === gamer1)||
			 	(gameTable[0][y] === gamer1 && gameTable[1][y] === gamer1 && gameTable[2][y] === gamer1)||
				(gameTable[0][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[2][2] === gamer1)||
				(gameTable[2][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[0][2] === gamer1))
		{
			 winner = gamer1; // определили победителя
		}
		
		gamer1 = !gamer1; // делаем переход хода
		player.innerText = gamer1 ? 'Сейчас ходит Х' : 'Сейчас ходит О'; // меняем статус хода
		
		// Определяем победителя или объявляем ничью
		if(nullCount == 0 || winner !== null){
			 if( winner !== null){
				 // confirm возвращает true или false и показывает окно для выбора пользователю
				 // если пользователь соглашается, игра начинается заново
				 if(confirm('Победили ' + (winner ? 'X' : 'O') + '.\nЖелаете сыграть еще?')){
					 reset();
				 }
			 } else if(confirm('Игра закончилась в ничью.\nЖелаете сыграть ещё?')){
				 reset();
			 }
		}
	}
	else {
			alert('Такой ход невозможен!');
	}
}

function reset(){
	gamer1 = true;
	nullCount = 9;
	gameTable = [[null, null, null],[null, null, null],[null, null, null]];
	winner = null;
	player.innerText = 'Сейчас ходит X';
	var table = document.getElementsByClassName('inner-cell');
	for(var i = 0; i < table.length; i++ ){
		table[i].innnerText = '';
	}
}