# from rest_framework.generics import ListCreateAPIView , ListAPIView
# from rest_framework import generics


# from .models import Shop
# from .serializers import ShopSerializer
# # from .permissions import IsAuthorOrReadOnly  
# from rest_framework.permissions import DjangoModelPermissions , BasePermission , SAFE_METHODS



# class ShopUserWritePermission(BasePermission) : 
#     message = 'Editing product is restricted to owner only.'
#     def has_object_permission(self ,request , view , obj): 
#         if request.method in SAFE_METHODS:
#             return True  

#         return obj.owner == request.user

# class ShopList(ListAPIView):
#     # permission_classes = (DjangoModelPermissions,)
#     queryset = Shop.objects.all()
#     serializer_class = ShopSerializer




# class Shopetails(generics.RetrieveUpdateDestroyAPIView , ShopUserWritePermission):
#     permission_classes = (ShopUserWritePermission,)
#     queryset = Shop.objects.all()
#     serializer_class = ShopSerializer


