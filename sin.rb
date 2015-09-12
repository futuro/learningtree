require 'sinatra'

get '/hi' do
  send_file 'test3.html'
end