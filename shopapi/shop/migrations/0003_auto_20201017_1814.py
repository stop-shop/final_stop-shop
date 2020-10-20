# Generated by Django 3.1.2 on 2020-10-17 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_auto_20201017_1809'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shop',
            name='tyPe',
        ),
        migrations.AddField(
            model_name='shop',
            name='type',
            field=models.CharField(choices=[('cars', 'Cars'), ('Electronics', 'Electronics'), ('Games', 'Games'), ('Fashion', 'Fashion'), ('Furniture', 'Furniture'), ('Real Estate', 'Real Estate'), ('Food', 'Food'), ('Equipment', 'Equipment'), ('Books', 'Books'), ('pets', 'Pets'), ('Business - Industrial', 'Business'), (' Craftsmen', 'Craftsmenjobs'), ('Electrician services', 'Electrician'), ('Travel - Tourism', 'Travel'), ('Medical Services', 'Medical'), ('Events Services', 'Events'), ('Teaching & Training', 'Teaching'), ('Others', 'Others')], default='Others', max_length=400),
        ),
    ]
