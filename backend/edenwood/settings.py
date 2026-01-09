"""
Django 6.0.1 settings for Edenwood project.
"""

import os
from datetime import timedelta
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# Build paths inside the project like this: BASE_DIR / "subdir".
BASE_DIR = Path(__file__).resolve().parent.parent
ROOT_DIR = BASE_DIR.parent

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "insecure-default-key")

DEBUG = os.getenv("DJANGO_DEBUG") == "True"


# Applications
# https://docs.djangoproject.com/en/6.1/ref/applications/

INSTALLED_APPS = [
    # unfold
    "unfold",
    # django
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # tiers
    "corsheaders",
    "rest_framework",
    "knox",
    "colorfield",
    # edenwood
    "edenwood.core",
    "edenwood.contrib.auth",
    # cleanup
    "django_cleanup.apps.CleanupConfig",
]


# Middlewares
# https://docs.djangoproject.com/en/6.1/topics/http/middleware/

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.locale.LocaleMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


# Cors Settings
# https://pypi.org/project/django-cors-headers/

ALLOWED_HOSTS = ["localhost", "127.0.0.1", "0.0.0.0"]

CORS_ALLOWED_ORIGINS = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:5173",
]

CORS_ALLOW_ALL_ORIGINS = False

CORS_ALLOW_CREDENTIALS = True


# Auth
# https://docs.djangoproject.com/en/6.1/topics/auth/customizing/

AUTH_USER_MODEL = "edw_auth.EdwUser"


# Rest Framework Settings
# https://www.django-rest-framework.org/

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "knox.auth.TokenAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
    # "DEFAULT_PAGINATION_CLASS": "okp.core.pagination.OkpPagination",
    # "PAGE_SIZE": 24,
}

KNOX_TOKEN_MODEL = "edw_auth.EdwAuthToken"

REST_KNOX = {
    "TOKEN_LIMIT_PER_USER": 4,
    "TOKEN_TTL": timedelta(days=7),
    "AUTO_REFRESH": True,
    "AUTO_REFRESH_MAX_TTL": timedelta(days=30),
    "USER_SERIALIZER": "knox.serializers.UserSerializer",
    "AUTH_HEADER_PREFIX": "edw",
    "TOKEN_MODEL": KNOX_TOKEN_MODEL,
}


# Templates
# https://docs.djangoproject.com/en/6.1/ref/settings/#templates

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "django.template.context_processors.i18n",
            ],
        },
    },
]


# Storage
# https://docs.djangoproject.com/en/6.1/ref/settings/#storages

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedStaticFilesStorage",
    },
}

ROOT_URLCONF = "edenwood.urls"

WSGI_APPLICATION = "edenwood.wsgi.application"


# Database
# https://docs.djangoproject.com/en/6.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": os.getenv("DB_ENGINE", "django.db.backends.sqlite3"),
        "NAME": os.getenv("DB_NAME", "db.sqlite3"),
        "USER": os.getenv("DB_USER", ""),
        "PASSWORD": os.getenv("DB_PASSWORD", ""),
        "HOST": os.getenv("DB_HOST", ""),
        "PORT": os.getenv("DB_PORT", ""),
    }
}


# Password validation
# https://docs.djangoproject.com/en/6.1/ref/settings/#auth-password-validators

PASSWORD_VALIDATION = "django.contrib.auth.password_validation"

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": f"{PASSWORD_VALIDATION}.UserAttributeSimilarityValidator",
    },
    {
        "NAME": f"{PASSWORD_VALIDATION}.MinimumLengthValidator",
    },
    {
        "NAME": f"{PASSWORD_VALIDATION}.CommonPasswordValidator",
    },
    {
        "NAME": f"{PASSWORD_VALIDATION}.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/6.0/topics/i18n/

LANGUAGE_CODE = os.getenv("LANGUAGE", "en")

LANGUAGES = [
    ("en", "English"),
    ("fr", "Français"),
]

LOCALE_PATHS = [
    BASE_DIR / "locale",
]

TIME_ZONE = os.getenv("TIME_ZONE", "UTC")

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/6.1/howto/static-files/

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "data" / "staticfiles"

MEDIA_URL = "media/"
MEDIA_ROOT = BASE_DIR / "data" / "mediafiles"

WHITENOISE_KEEP_ONLY_HASHED_FILES = True

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"


# Unfold Settings
# https://unfoldadmin.com/docs/installation/quickstart

from django.templatetags.static import static  # noqa: E402
from django.urls import reverse_lazy  # noqa: E402

UNFOLD = {
    "SITE_TITLE": "Edenwood",
    "SITE_HEADER": "Edenwood",
    "SITE_SUBHEADER": "Administration",
    "SITE_URL": "/",
    "SITE_SYMBOL": "dashboard",
    # "SITE_ICON": lambda request: static("img/favicon-32.png"),
    "SITE_FAVICONS": [
        {
            "rel": "icon",
            "sizes": "32x32",
            "type": "image/png",
            "href": lambda request: static("img/favicon.png"),
        },
    ],
    "SHOW_HISTORY": True,
    "SHOW_LANGUAGES": True,
    "SHOW_VIEW_ON_SITE": True,
    "SHOW_BACK_BUTTON": True,
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": True,
        "navigation": [
            {
                "title": "Authentication",
                "collapsible": True,
                "items": [
                    {
                        "title": "Users",
                        "icon": "group",
                        "link": reverse_lazy(
                            "admin:edw_auth_edwuser_changelist"
                        ),
                    },
                    {
                        "title": "Tokens",
                        "icon": "token",
                        "link": reverse_lazy(
                            "admin:edw_auth_edwauthtoken_changelist"
                        ),
                    },
                ],
            },
        ],
    },
    "COLORS": {
        "base": {
            "50": "250 250 250",
            "100": "244 244 244",
            "200": "231 231 231",
            "300": "214 214 214",
            "400": "168 168 168",
            "500": "121 121 121",
            "600": "94 94 94",
            "700": "71 71 71",
            "800": "47 47 47",
            "900": "33 33 33",
            "950": "15 15 15",
        },
        "primary": {
            "50": "234 246 242",
            "100": "208 236 228",
            "200": "166 217 199",
            "300": "123 197 170",
            "400": "80 177 141",
            "500": "54 157 117",
            "600": "42 107 82",  # Hex: #2a6b52
            "700": "36 91 70",
            "800": "30 76 58",
            "900": "24 61 46",
            "950": "14 36 27",
        }
    }
}
