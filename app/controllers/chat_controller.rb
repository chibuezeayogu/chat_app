class ChatController < ApplicationController
  before_action :authenticate!
  attr_reader :current_user

  def show
    @messages = Message.order(created_at: :asc).last(20)
  end

  private

  def authenticate!
    @current_user = session[:username]
    redirect_to login_path unless @current_user
  end
end
