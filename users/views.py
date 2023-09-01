from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Client, Address
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist


def auth(request):

    if request.method == 'GET':
        return render(request, 'users/auth.html')

    elif request.method == 'POST':
        # Formulário de Login
        if 'formLogin' in request.POST:
            email = request.POST.get('email')
            username = email.split('@')[0]

            # Autenticação do usuário
            user = authenticate(username=username,
                                password=request.POST.get('password'))

            if user:
                login(request, user)
                return redirect('home')
            else:
                return HttpResponse("Email ou senha inválidos")

        # Formulário de Registro
        elif 'formRegister' in request.POST:
            email = request.POST.get('email')
            username = email.split('@')[0]
            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')

            if request.POST.get('password') != request.POST.get('confirmPassword'):
                return HttpResponse("Senhas não são iguais")

            user = User.objects.filter(email=email).first()
            if user:
                return HttpResponse("Já existe uma conta neste email, faça login")

            user = User.objects.create_user(
                username=username, email=email, password=request.POST.get('password'), first_name=first_name, last_name=last_name)

            user.save()
            login(request, user)
            return redirect('home')


def logout_view(request):
    logout(request)
    return redirect('home')


@login_required
def procfile(request):

    show_success_message = False

    if request.method == 'GET':
        if request.user.is_authenticated:
            try:
                client = Client.objects.get(user=request.user)
            except Client.DoesNotExist:
                client = None

            try:
                address = Address.objects.get(user=request.user)
            except Address.DoesNotExist:
                address = None

            return render(request, 'users/procfile.html', {'client': client, 'address': address, 'show_success_message': show_success_message})
        else:
            return render(request, 'users/procfile.html')

    elif request.method == 'POST':

       # Formulário Informações Pessoais
        if 'formInfo' in request.POST:

            email = request.POST.get("email")
            first_name = request.POST.get("first_name")
            last_name = request.POST.get("last_name")
            cpf = request.POST.get("cpf")
            phone_number = request.POST.get("phone_number")
            user = request.user
            fullname = f"{first_name} {last_name}"

            # Tenta buscar um objeto Client associado ao usuário
            client, created = Client.objects.get_or_create(user=user, defaults={
                                                           'fullname': fullname, 'cpf': cpf, 'phone_number': phone_number})

            # Se o objeto já existia, atualiza seus valores
            if not created:
                client.fullname = fullname
                client.cpf = cpf
                client.phone_number = phone_number
                user.first_name = first_name
                user.last_name = last_name
                client.save()
                user.save()

            show_success_message = True
            return redirect('procfile')

        # Formulário Endereço
        elif 'formAddress' in request.POST:

            user = request.user
            cep = request.POST.get("cep")
            street = request.POST.get("street")
            number = request.POST.get("number")
            district = request.POST.get("district")
            city = request.POST.get("city")
            state = request.POST.get("state")
            country = request.POST.get("country")
            complement = request.POST.get("complement")

            # busca um objeto Address associado ao usuário
            address, created = Address.objects.get_or_create(user=user, defaults={'cep': cep,
                                                                                  'street': street, 'number': number, 'district': district, 'city': city,
                                                                                  'state': state, 'country': country, 'complement': complement})

            # Se o objeto já existia, atualiza seus valores
            if not created:
                address.cep = cep
                address.street = street
                address.number = number
                address.district = district
                address.city = city
                address.state = state
                address.country = country

                address.save()

            show_success_message = True

            return redirect('procfile')

        else:
            return redirect('procfile')


def order(request):
    return render(request, 'users/order.html')


def policy(request):
    return render(request, 'users/resources/policy.html')


def terms(request):
    return render(request, 'users/resources/terms.html')


def checkout(request):
    return render(request, 'users/checkout.html')
