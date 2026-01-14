from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from edenwood.contrib.auth.serializers import (
    EdwUserSerializer,
)


class EdwAuthMeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        serialized_user = EdwUserSerializer(request.user)
        return Response(
            {
                "user": serialized_user.data,
            }
        )


class EdwAuthMeAccountView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        data = {
            "username": f"{request.user.username}",
            "email": f"{request.user.email}"
        }
        return Response(
            {
                "account": data,
            }
        )


class EdwAuthMeEditView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        name = request.data.get("name")
        avatar = request.data.get("avatar")
        cover = request.data.get("cover")

        if name is not None:
            request.user.name = name
        if avatar is not None:
            request.user.avatar = avatar
        if cover is not None:
            request.user.cover = cover

        request.user.save()

        serialized_user = EdwUserSerializer(request.user)
        return Response(
            {
                "user": serialized_user.data,
            }
        )
