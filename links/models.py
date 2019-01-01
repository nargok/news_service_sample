from django.db import models

class Link(models.Model):
  title = models.CharField(max_length=255)
  url = models.CharField(max_length=255)
  description = models.CharField(max_length=255)
  site_name = models.CharField(max_length=100, default="")
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.title