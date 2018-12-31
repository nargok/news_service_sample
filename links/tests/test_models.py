import pytest

from links.models import Link

pytestmark = pytest.mark.django_db

class TestLinkModel:

  def test_create_link(self):
    link = Link.objects.create(
      title="test link",
      url="http://www.example.com",
      description="test post"
    )

    saved_link = Link.objects.get(pk=link.id)

    assert link == saved_link

  # TODO validationを検討して、テストを実装する
  # def test_invalid_links_with_too_long_title(self):
  #   too_long_title =\
  #   """
  #   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  #   """
  #
  #   link = Link(
  #     title=too_long_title,
  #     url="http://www.example.com",
  #     description="test"
  #   )
