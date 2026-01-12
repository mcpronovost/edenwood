from django.urls import path

from .views import (
    EdwAuthLoginView,
    EdwAuthLogoutView,
    EdwAuthLogoutAllView,
    EdwAuthRegisterView,
    EdwAuthMeView,
    EdwAuthUsersProfileView,
)

urlpatterns = [
    path("login/", EdwAuthLoginView.as_view(), name="edw_auth_login"),
    path("logout/", EdwAuthLogoutView.as_view(), name="edw_auth_logout"),
    path("logoutall/", EdwAuthLogoutAllView.as_view(), name="edw_auth_logoutall"),
    path("register/", EdwAuthRegisterView.as_view(), name="edw_auth_register"),
    path("me/", EdwAuthMeView.as_view(), name="edw_auth_me"),
    path("users/<slug:user_slug>/profile/", EdwAuthUsersProfileView.as_view(), name="edw_auth_users_profile"),
]