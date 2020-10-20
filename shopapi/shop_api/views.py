from rest_framework.generics import ListCreateAPIView , ListAPIView
from rest_framework import generics, permissions


from shop.models import Shop
from .serializers import ShopSerializer
# from .permissions import IsAuthorOrReadOnly  
from rest_framework.permissions import DjangoModelPermissions , BasePermission  ,SAFE_METHODS, AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework import viewsets
from rest_framework import filters
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import filters



class ShopUserWritePermission(BasePermission) : 
    message = 'Editing product is restricted to owner only.'
    def has_object_permission(self ,request , view , obj): 
        if request.method in SAFE_METHODS:
            return True  

        return obj.owner == request.user

class ShopList(ListAPIView):
    # permission_classes = (DjangoModelPermissions,)
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class ProfileList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ShopSerializer
    def get_queryset(self):
        user = self.request.user
        return Shop.objects.filter(owner=user)

class ShopeListDetailfilter(generics.ListAPIView):

    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^title']




class Shopetails(generics.RetrieveUpdateDestroyAPIView , ShopUserWritePermission):
    permission_classes = (ShopUserWritePermission,)
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

############
class CreatePost(generics.CreateAPIView , ShopUserWritePermission):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

class AdminPostDetail(generics.RetrieveAPIView , ShopUserWritePermission):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

class EditPost(generics.UpdateAPIView , ShopUserWritePermission):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

class DeletePost(generics.RetrieveDestroyAPIView , ShopUserWritePermission):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer



