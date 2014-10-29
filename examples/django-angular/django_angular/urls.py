from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from app.views import HomeView

from rest_framework import routers
from app import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)


urlpatterns = patterns('',
	# Examples:
	url(r'^$', HomeView.as_view(), name='home'),
	url(r'^', include(router.urls)),
	url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

	url(r'^admin/', include(admin.site.urls)),
)
