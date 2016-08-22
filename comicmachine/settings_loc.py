import os

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '(kn)n9#wace@5*k-dcm@hjf(ei6+b4vpe99&bpo^6u4=l2wts!'

DEBUG = False
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG404 = True 
ALLOWED_HOSTS = ['*'] 

ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'd8absrlmrmhfhc',
        'USER': 'afajjrbqjhblnz',
        'PASSWORD': 'UzGS2IWFjQr0Iw_7B0oDVLa7Oq',
        'HOST': 'ec2-54-204-39-67.compute-1.amazonaws.com'
    }
}

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
STATIC_ROOT =  os.path.join(BASE_DIR, 'staticroot')

ADMIN_URL = 'admin/'