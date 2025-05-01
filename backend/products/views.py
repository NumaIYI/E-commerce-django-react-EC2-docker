'''from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product
import json

# Ürün listeleme
def product_list(request):
    if request.method == 'GET':
        # Ürünleri al
        products = Product.objects.all()
        data = [{"id": p.id, "name": p.name, "description": p.description, "price": float(p.price), "stock": p.stock} for p in products]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        # Yeni ürün ekle
        try:
            data = json.loads(request.body)
            name = data.get('name')
            description = data.get('description')
            price = data.get('price')
            stock = data.get('stock')

            # Yeni ürün oluştur
            new_product = Product.objects.create(
                name=name,
                description=description,
                price=price,
                stock=stock
            )
            return JsonResponse({
                'id': new_product.id,
                'name': new_product.name,
                'description': new_product.description,
                'price': new_product.price,
                'stock': new_product.stock
            }, status=201)  # 201 Created status code
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

# İstekleri geçici olarak CSRF kontrolünden muaf tutuyoruz (Post isteği için)
@csrf_exempt
def create_product(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        description = data.get('description')
        price = data.get('price')
        stock = data.get('stock')

        # Yeni ürün ekle
        product = Product.objects.create(
            name=name,
            description=description,
            price=price,
            stock=stock
        )
        return JsonResponse({
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'stock': product.stock
        }, status=201)  '''
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product
import json

def product_list(request):
    if request.method == 'GET':

        products = Product.objects.all()
        data = [{"id": p.id, "name": p.name, "description": p.description, "price": float(p.price), "stock": p.stock} for p in products]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
       
        try:
            data = json.loads(request.body)
            name = data.get('name')
            description = data.get('description')
            price = data.get('price')
            stock = data.get('stock')

          
            new_product = Product.objects.create(
                name=name,
                description=description,
                price=price,
                stock=stock
            )

            return JsonResponse({
                'id': new_product.id,
                'name': new_product.name,
                'description': new_product.description,
                'price': new_product.price,
                'stock': new_product.stock
            }, status=201)

        except Exception as e:
            
            return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def create_product(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            description = data.get('description')
            price = data.get('price')
            stock = data.get('stock')

            new_product = Product.objects.create(
                name=name,
                description=description,
                price=price,
                stock=stock
            )
            return JsonResponse({
                'id': new_product.id,
                'name': new_product.name,
                'description': new_product.description,
                'price': new_product.price,
                'stock': new_product.stock
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

