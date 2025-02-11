from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at', 'updated_at')
    search_fields = ('name', 'description')
    list_filter = ('created_at', 'updated_at')
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Service Information', {
            'fields': ('name', 'description')
        }),
        ('Date Information', {
            'fields': ('created_at', 'updated_at')
        }),
    )
    add_fieldsets = (
        ('Service Information', {
            'fields': ('name', 'description')
        }),
    )