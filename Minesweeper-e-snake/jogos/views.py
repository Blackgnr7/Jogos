from django.shortcuts import render

def snake(request):
    return render(request,'snake.html')

def minesweeper(request):
    return render(request,'minesweeper.html')


