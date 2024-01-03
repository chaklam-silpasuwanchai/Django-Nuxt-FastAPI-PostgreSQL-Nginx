from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name
        
class Report(models.Model):
    name = models.CharField(max_length=100)
    version = models.CharField(max_length=20)
    last_updated = models.DateTimeField(auto_now=True)
    author  = models.ForeignKey(Author, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.name} - Version {self.version}"
    
#step 1: create models