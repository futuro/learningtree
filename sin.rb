require 'sinatra'

get '/hi' do
  send_file 'test.html'
end