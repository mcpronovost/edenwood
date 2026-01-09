from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class EdwAppConfig(AppConfig):
    name = "edenwood.app"
    label = "edw_app"
    verbose_name = _("App")
