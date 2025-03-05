var campo_minado = document.getElementById('minesweeper')
var snake = document.getElementById('snake')

snake.addEventListener('click', function(){
    window.location.href = "/snake";
});
campo_minado.addEventListener('click', function(){
    window.location.href = "/minesweeper";
});