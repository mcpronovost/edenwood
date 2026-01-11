from django.urls import include, path

urlpatterns = [
    path("auth/", include("edenwood.contrib.auth.api.urls")),
]
