class NewsServicesController < ApplicationController
  before_action :set_news_service, only: [:show, :update, :destroy]

  # GET /news_services
  def index
    @news_services = NewsService.all

    render json: @news_services
  end

  # GET /news_services/1
  def show
    render json: @news_service
  end

  # POST /news_services
  def create
    @news_service = NewsService.new(news_service_params)

    if @news_service.save
      render json: @news_service, status: :created, location: @news_service
    else
      render json: @news_service.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /news_services/1
  def update
    if @news_service.update(news_service_params)
      render json: @news_service
    else
      render json: @news_service.errors, status: :unprocessable_entity
    end
  end

  # DELETE /news_services/1
  def destroy
    @news_service.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_news_service
      @news_service = NewsService.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def news_service_params
      # params.fetch(:news_service, {})
      params.require(:news_service).permit(:name, :author, :title, :description, :url)
    end
end
