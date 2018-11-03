Rails.application.routes.draw do

  resources :breaks, only: [:index, :show] do
    resources :posts, only: [:index, :show, :create, :new, :destroy]
  end


  namespace :api do
    namespace :v1 do
      resources :breaks, only: [:index, :show] do
        resources :posts, only: [:index, :new, :create, :destroy]
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :new, :destroy]
    end
  end

  root 'breaks#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
