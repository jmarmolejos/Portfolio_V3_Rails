class ContactController < ApplicationController
  def post_form
    ContactFormMailer.contact_email(params[:message], params[:email], params[:name]).deliver
    render json:{"result"=>"success"}
  end
end
