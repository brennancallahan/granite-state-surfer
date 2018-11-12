Rails.application.routes.draw do

  devise_for :users

  resources :breaks, only: [:index, :show] do
    resources :posts, only: [:index, :show, :create, :new, :destroy]
  end

  resources :buoydatas, only: [:index]

  resources :users, only: [:show] do
    resources :posts, only: [:index, :show] do
      resources :breaks, only: [:index, :show]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :posts, only: [:index, :show, :destroy] do
          resources :breaks, only: [:index, :show]
        end
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :buoydatas, only: [:index]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :breaks, only: [:index, :show] do
        resources :posts, only: [:index, :show, :new, :create, :destroy]
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :new, :destroy]
    end
  end

  root 'breaks#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
