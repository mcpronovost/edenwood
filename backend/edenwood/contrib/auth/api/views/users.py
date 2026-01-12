from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from edenwood.contrib.auth.models import (
    EdwUser
)
from edenwood.contrib.auth.serializers import (
    EdwUserSerializer,
)


class EdwAuthUsersProfileView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        slug = kwargs["user_slug"]
        if not slug or slug == "":
            return Response(
                {
                    "success": False
                }
            )
        user = EdwUser.objects.filter(
            slug=slug
        ).first()
        if user is None:
            return Response(
                {
                    "success": False
                }
            )
        serialized_user = EdwUserSerializer(user)
        return Response(
            {
                "user": serialized_user.data,
            }
        )
