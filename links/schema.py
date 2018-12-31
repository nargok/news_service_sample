from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from links.models import Link

class LinkNode(DjangoObjectType):
  class Meta:
    model = Link
    filter_fields = ['title', 'description']
    interfaces = (relay.Node,)

class Query(object):
  link = relay.Node.Field(LinkNode)
  all_links = DjangoFilterConnectionField(LinkNode)