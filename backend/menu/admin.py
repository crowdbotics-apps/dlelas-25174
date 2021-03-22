from django.contrib import admin
from .models import ItemVariant, Country, Item, Category, Review

admin.site.register(Country)
admin.site.register(ItemVariant)
admin.site.register(Item)
admin.site.register(Review)
admin.site.register(Category)

# Register your models here.
