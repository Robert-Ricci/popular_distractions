require 'test_helper'

class NewsServicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @news_service = news_services(:one)
  end

  test "should get index" do
    get news_services_url, as: :json
    assert_response :success
  end

  test "should create news_service" do
    assert_difference('NewsService.count') do
      post news_services_url, params: { news_service: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show news_service" do
    get news_service_url(@news_service), as: :json
    assert_response :success
  end

  test "should update news_service" do
    patch news_service_url(@news_service), params: { news_service: {  } }, as: :json
    assert_response 200
  end

  test "should destroy news_service" do
    assert_difference('NewsService.count', -1) do
      delete news_service_url(@news_service), as: :json
    end

    assert_response 204
  end
end
