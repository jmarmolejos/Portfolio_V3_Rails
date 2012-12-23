class ContactFormMailer < ActionMailer::Base
  default from: "website@uxworkshop.net"
  
  def contact_email (message, from, name)
    @email =  { :from => from, :message => message , :user_name => name }
    mail(:to => "", :subject => "#{name} wrote from the website.")
  end
  
end
