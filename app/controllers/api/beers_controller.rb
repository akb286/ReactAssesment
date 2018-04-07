class Api::BeersController < ApplicationController
  # brewery_db.beers.all
  # brewery_db.beers.all(name: 'Coors Light')
  # brewery_db.beers.random

  # GET all beers?
  def index
  end

  def show
  end

  def new
  end

  def edit
  end

  def all
    send_response(brew_client.beers.all(p: @page))
  end

  def by_name
    send_response(brew_client.beers.all(name: params[:name], p: @page))
  end

  def random
    send_response(brew_client.beers.random(p: @page))
  end
end
