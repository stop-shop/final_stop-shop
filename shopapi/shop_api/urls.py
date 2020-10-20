from django.urls import path

from .views import ShopList , Shopetails ,CreatePost,AdminPostDetail,DeletePost , EditPost , ProfileList
app_name = 'shop_api'


urlpatterns = [
    path('', ShopList.as_view(), name='shop'),
    path('<int:pk>/', Shopetails.as_view(), name='shop_details'),
    ##########
    path('create/', CreatePost.as_view(), name='createpost'),
    path('edit/postdetail/<int:pk>/', AdminPostDetail.as_view(), name='admindetailpost'),
    path('edit/<int:pk>/', EditPost.as_view(), name='editpost'),
    path('delete/<int:pk>/', DeletePost.as_view(), name='deletepost'),
    path('profile/', ProfileList.as_view(), name='profile'),
    
]