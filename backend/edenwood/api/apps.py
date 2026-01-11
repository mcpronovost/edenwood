from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class EdwApiConfig(AppConfig):
    name = "edenwood.api"
    label = "edw_api"
    verbose_name = _("API")
