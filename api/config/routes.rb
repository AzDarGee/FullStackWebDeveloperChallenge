Rails.application.routes.draw do
  resources :words
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/words/find_words', to: "words#find_words"

end
