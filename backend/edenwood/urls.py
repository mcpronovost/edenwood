"""
URL configuration for Edenwood project.
"""
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView

urlpatterns = [
    path("i18n/", include("django.conf.urls.i18n")),
    path("", RedirectView.as_view(url="/fr/", permanent=False)),
] + i18n_patterns(
    path("admin/", admin.site.urls),
    re_path(r"^(?:.*)?$", TemplateView.as_view(template_name="index.html"))
)

urlpatterns += static(
    settings.STATIC_URL,
    document_root=settings.STATIC_ROOT
)
urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)
