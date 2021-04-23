Rails.application.routes.draw do
  resources :words, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/words/:word', to: "words#find_words"
  post '/words/upload_file', to: "words#upload_file"

end
