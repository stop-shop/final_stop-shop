from rest_framework import serializers

from shop.models import Shop

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ('title', 'tyPe','description','title','category','owner','phone','email','address','price','id','image')
