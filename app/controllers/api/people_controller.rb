class Api::PeopleController < ApplicationController
  def index
    @people = Person.all
    render "index.json.jbuilder"
  end

  def create
    @person = Person.new(name: params[:name], bio: params[:bio], avatar: params[:avatar])
    if @person.save
      render "show.json.jbuilder"
    else
      render json: {errors: @person.errors.full_messages}, status: :bad_request
    end
  end

  def show
    @person = Person.find_by(id: params[:id])
    render "show.json.jbuilder"
  end

  def update
    @person = Person.find_by(id: params[:id])
    @person.name = params[:name] || @person.name
    @person.bio = params[:bio] || @person.bio
    @person.save
    render "show.json.jbuilder"
  end

  def destroy
    @person = Person.find_by(id: params[:id])
    @person.destroy
    render json: {message: "Person successfully destroyed!"}
  end
end
