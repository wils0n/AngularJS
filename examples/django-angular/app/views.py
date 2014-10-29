from django.shortcuts import render
from django.views.generic import TemplateView

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer
from rest_framework import permissions

class UserViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows users to be viewed or edited.
	"""
	queryset = User.objects.all()
	serializer_class = UserSerializer
	permission_classes = (permissions.AllowAny,)

class GroupViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows groups to be viewed or edited.
	"""
	queryset = Group.objects.all()
	serializer_class = GroupSerializer
	

class HomeView(TemplateView):
	template_name="index.html"