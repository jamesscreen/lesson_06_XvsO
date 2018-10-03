var board = document.getElementsByClassName('board')[0], // Игровое поле
		player = document.getElementsByClassName('step_sttus')[0], // Статус хода
		element, // внешний блок ячейки "cell"
		innerElement, // вложенный класс "inner-cell"
		gamer1 = true, // кто сейчас ходит, по умолчанию это "Х"
		gameTable = [[null, null, null],[null, null, null],[null, null, null]], // матрица игры
		nullCount = 9, // количество оставшихся ходов
		winner = null;

