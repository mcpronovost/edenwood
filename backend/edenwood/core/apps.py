from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class EdwCoreConfig(AppConfig):
    name = "edenwood.core"
    label = "edw_core"
    verbose_name = _("Core")
