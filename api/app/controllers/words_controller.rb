class WordsController < ApplicationController
  before_action :set_word, only: [:show, :update, :destroy]

  # GET /words
  def index
    @words = Word.all

    render json: @words
  end

  # GET /words/1
  def show
    render json: @word
  end

  # POST /words
  def create
    book_title = params[:from_book]

    @word = Word.new
    @word.from_book = book_title

    if @word.save
      render json: @word, status: :created, location: @word
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /words/1
  def update
    if @word.update(word_params)
      render json: @word
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /words/1
  def destroy
    @word.destroy
  end

  def find_words
    searchTerm = params[:searchTerm]

    @words = Word.where("word ILIKE ?", "%" + searchTerm + "%").limit(3)

    render json: @words
  end
  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_word
      @word = Word.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def word_params
      params.fetch(:word, {}).permit(:from_book)
    end
end
