Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    get "/people" => "people#index"
    post "/people" => "people#create"
    get "/people/:id" => "people#show"
    patch "/people/:id" => "people#update"
    delete "/people/:id" => "people#destroy"
  end
end
