from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class EdwAuthConfig(AppConfig):
    name = "edenwood.contrib.auth"
    label = "edw_auth"
    verbose_name = _("Authentication")
