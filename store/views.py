from django.shortcuts import render, get_object_or_404
from users.models import Product


def home(request):
    products = Product.objects.all()
    return render(request, 'store/home.html', {'products': products})


def view_product(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    return render(request, 'store/view_product.html', {'product': product, 'product_id': product_id})
