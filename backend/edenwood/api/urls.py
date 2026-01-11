from django.urls import include, path

urlpatterns = [
    path("v1/", include("edenwood.api.v1.urls")),
]
