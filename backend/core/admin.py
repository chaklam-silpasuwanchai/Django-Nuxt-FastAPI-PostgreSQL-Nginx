from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin

from .models import User
from .models import Report
from .models import Author

@admin.register(User)
class UserAdmin(DefaultUserAdmin):
    pass

admin.site.register(Author)  #so that you guys can manipulate in localhost:8080/admin
admin.site.register(Report)
