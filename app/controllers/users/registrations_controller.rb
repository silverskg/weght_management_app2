class Users::RegistrationsController < Devise::RegistrationsController
  before_action :ensure_normal_user, only: %i[destroy update]

  def ensure_normal_user
    if resource.email == "guest@example.com"
      redirect_to root_path, alert: "ゲストユーザーは更新・削除できません"
    end
  end
end