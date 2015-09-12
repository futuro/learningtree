require 'sinatra'

get '/hi' do
  send_file 'index.html'
end