# Generated by Django 5.2 on 2025-05-05 13:51

import django.contrib.auth.models
import django.contrib.auth.validators
import django.core.validators
import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sala',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=90, verbose_name="Nome da sala, ex: 'sala verde'")),
                ('tamanho', models.PositiveIntegerField()),
                ('capacidade', models.PositiveIntegerField(default=50)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('tipo', models.CharField(choices=[('G', 'Gestor'), ('P', 'Professor')], default='P', max_length=1)),
                ('ni', models.PositiveIntegerField(verbose_name='Número de identificação')),
                ('telefone', models.CharField(help_text='O número deve ser passado neste modelo (xx)xxxxx-xxxx', max_length=30, validators=[django.core.validators.RegexValidator(message='Informe um número de telefone válido.', regex='^\\+?[\\d\\s\\-\\(\\)]{10,20}$')], verbose_name="Número de telefone padrão '(xx)xxxxx-xxxx'")),
                ('data_contratacao', models.DateField(verbose_name='Data de contratação')),
                ('data_nascimento', models.DateField(verbose_name='A data de nascimento do usuário')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Disciplina',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255, verbose_name="Nome da discilplina, ex:'Fisíca' ")),
                ('curso', models.CharField(max_length=255, verbose_name='Qual curso essa matéria está?')),
                ('carga_horario', models.PositiveIntegerField(default=100, verbose_name='Quantas horas da matéria')),
                ('descricao', models.TextField(verbose_name='Sobre a matéria')),
                ('professor', models.ForeignKey(blank=True, limit_choices_to={'tipo': 'P'}, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Professor que ministra essa disciplina')),
            ],
        ),
        migrations.CreateModel(
            name='Reserva_ambiente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_inicio', models.DateField()),
                ('data_termino', models.DateField()),
                ('periodo', models.CharField(choices=[('M', 'Manhã'), ('T', 'Tarde'), ('N', 'Noite')], max_length=1)),
                ('disciplina', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.disciplina', verbose_name='A disciplina')),
                ('professor', models.ForeignKey(blank=True, limit_choices_to={'tipo': 'P'}, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Escolha qual professor')),
                ('sala', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.sala')),
            ],
        ),
    ]
