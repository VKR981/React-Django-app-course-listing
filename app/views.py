from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

# Create your views here.

def index(request,name):
    name="sir "+name
    return render(request,"app/index.html")
