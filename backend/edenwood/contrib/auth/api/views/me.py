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
