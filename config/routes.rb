Rails.application.routes.draw do
  devise_for :users
  root 'graphs#index'
  resource :graphs, only: %i[index create update]

  devies_scope :user do
    post "users/guest_sign_in", to: "users/sessions#guest_sign_in"
  end
end
