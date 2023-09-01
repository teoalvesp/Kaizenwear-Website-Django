from . import views
from django.urls import path

urlpatterns = [
    path('auth/', views.auth, name='auth'),
    path('policy/', views.policy, name='policy'),
    path('terms/', views.terms, name='terms'),
    path('checkout/', views.checkout, name='checkout'),
    path('procfile/', views.procfile, name='procfile'),
    path('orders/', views.order, name='order'),
    path('logout/', views.logout_view, name='logout'),

]
