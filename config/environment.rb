# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
PortfolioV3Rails::Application.initialize!

ActionMailer::Base.smtp_settings = {
  :address        => "smtp.gmail.com",
  :port           => 587,
  :domain         => "",
  :user_name      => "",
  :password       => "",
  :authentication => :plain
}