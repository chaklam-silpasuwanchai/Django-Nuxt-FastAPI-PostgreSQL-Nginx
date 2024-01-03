from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReportViewSet

router = DefaultRouter()
router.register(r'report', ReportViewSet, basename='report')

#step 2: register your model to the router

urlpatterns = [
    path('', include(router.urls)),  
]

#allows me to go to api/report/ -> Get all
#                   api/report/1 -> Get one
#                   PATCH, POST, DELETE