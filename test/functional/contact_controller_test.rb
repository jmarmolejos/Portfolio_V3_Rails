require 'test_helper'

class ContactControllerTest < ActionController::TestCase
  test "should get post_form" do
    post :post_form
    assert_response :success
  end

end
