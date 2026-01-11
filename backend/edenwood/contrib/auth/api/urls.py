from django.urls import path

from .views import (
    EdwAuthLoginView,
    EdwAuthLogoutView,
    EdwAuthLogoutAllView,
    EdwAuthRegisterView,
    EdwAuthMeView,
)

urlpatterns = [
    path("login/", EdwAuthLoginView.as_view(), name="edw_auth_login"),
    path("logout/", EdwAuthLogoutView.as_view(), name="edw_auth_logout"),
    path("logoutall/", EdwAuthLogoutAllView.as_view(), name="edw_auth_logoutall"),
    path("register/", EdwAuthRegisterView.as_view(), name="edw_auth_register"),
    path("me/", EdwAuthMeView.as_view(), name="edw_auth_me"),
]