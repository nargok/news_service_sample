# Generated by Django 2.1.4 on 2019-01-01 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('links', '0002_auto_20190101_0720'),
    ]

    operations = [
        migrations.AlterField(
            model_name='link',
            name='site_name',
            field=models.CharField(default='', max_length=100),
        ),
    ]
