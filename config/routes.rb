Rails.application.routes.draw do

  resources :breaks, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :breaks, only: [:index, :show]
    end
  end

  root 'breaks#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
