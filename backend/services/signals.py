from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from .models import Service
import os

@receiver(post_delete, sender=Service)
def delete_service_image(sender, instance, **kwargs):
    if instance.img:
        if os.path.isfile(instance.img.path):
            os.remove(instance.img.path)

@receiver(pre_save, sender=Service)
def delete_old_service_image(sender, instance, **kwargs):
    if not instance.pk:
        return False

    try:
        old_img = Service.objects.get(pk=instance.pk).img
    except Service.DoesNotExist:
        return False

    new_img = instance.img
    if old_img and old_img != new_img:
        if os.path.isfile(old_img.path):
            os.remove(old_img.path)