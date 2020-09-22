from django.urls import path, include
from . import views
from .views import CourseAPI, CommentAPI, RatingAPI
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('course', CourseAPI)
router.register('comment', CommentAPI)
router.register('rating', RatingAPI)

urlpatterns = [
    path("", views.index, name="index"),
    path("api/v1/", include(router.urls)),


]
