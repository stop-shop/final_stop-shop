from django.db import models
# from django.contrib.auth import get_user_model
from django.conf import settings

class Shop(models.Model):
    title = models.CharField(max_length=64)
    # tyPe = models.CharField(max_length=64)
    description= models.TextField()
    category = models.CharField(max_length=64)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete= models.CASCADE)
    phone = models.CharField(max_length=64)
    email = models.CharField(max_length=64)
    address = models.CharField(max_length=64)
    price = models.CharField(max_length=64)
    image= models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Type(models.TextChoices):
        cars =  "cars"
        Electronics = "Electronics"
        Games = "Games"
        Fashion = "Fashion"
        Furniture ="Furniture"
        Real_Estate = "Real Estate"
        Food ="Food"
        Equipment = "Equipment"
        Books = "Books"
        pets = "pets"
        Business = "Business - Industrial"
        CraftsmenJobs = " Craftsmen"
        Electrician = "Electrician services"
        Travel = "Travel - Tourism"
        Medical = "Medical Services"
        Events = "Events Services"
        Teaching ="Teaching & Training"
        Others = "Others"
    tyPe = models.CharField(
        max_length=400,
        choices=Type.choices,
        default=Type.Others
    )
    class Category(models.TextChoices):
            goods =  "goods"
            services =  "services"
    category = models.CharField(
            max_length=20,
            choices=Category.choices,
            default=Category.goods 
        )
    def __str__(self):
        return self.title




