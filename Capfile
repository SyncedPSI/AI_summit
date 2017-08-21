# Load DSL and set up stages
require 'capistrano/setup'

require 'capistrano/deploy'

require 'capistrano/scm/git'
install_plugin Capistrano::SCM::Git

# Include tasks from other gems included in your Gemfile
#
require 'capistrano/rbenv'
require 'capistrano/bundler'
require 'capistrano/rails'
require 'capistrano/puma'

install_plugin Capistrano::Puma # Default puma tasks
install_plugin Capistrano::Puma::Workers

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }
