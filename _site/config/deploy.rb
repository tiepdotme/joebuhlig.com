# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'joebuhlig_com'
set :repo_url, 'git@github.com:joebuhlig/joebuhlig_com.git'
set :deploy_via, :copy

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/html'
# set :user, "joebuhlig"
# role :web, "104.236.248.91"

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 5

namespace :deploy do

	task :default do
		transaction do
			update_jekyll
		end
	end

	desc 'Run jekyll to update site before uploading'
	task :update_jekyll do
	# clear existing _site
	# build site using jekyll
	# remove Capistrano stuff from build
	%x(rm -rf _site/* && jekyll build && rm _site/Capfile && rm -rf _site/config)
	end
end