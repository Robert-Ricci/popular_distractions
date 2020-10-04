class NewsService < ApplicationRecord

    require 'HTTP'

    
    def get_news_top_stories
        response = HTTP.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=#{ENV["NEWS_API_KEY"]}").to_s 
        parsed_reponse = JSON.parse(response)
    end
end
