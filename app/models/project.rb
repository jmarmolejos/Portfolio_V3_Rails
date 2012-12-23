class Project < ActiveRecord::Base
  attr_accessible :client_name, :description, :preview_path, :stack, :teaser, :thumbnail_path
end
