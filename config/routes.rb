Rails.application.routes.draw do
  root "chat#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/login", to: "auth#new"
  post "/login", to: "auth#create"
end
