# Generated by Django 5.1.6 on 2025-02-11 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='services/'),
        ),
    ]
