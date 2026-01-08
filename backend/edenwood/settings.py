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

ALLOWED_HOSTS = ["localhost"]

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
        "NAME": os.getenv("DB_NAME", BASE_DIR / "db.sqlite3"),
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
