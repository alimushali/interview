from django.urls import re_path

from .views import main_page


app_name = 'companies'
urlpatterns = [
    re_path(r'^.*$', main_page),
]
