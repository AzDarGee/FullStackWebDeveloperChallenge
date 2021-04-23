class WordsController < ApplicationController
  before_action :set_word, only: [:show, :update, :destroy]

  # GET /words
  def index
    @words = Word.all.order("id DESC").limit(100)

    render json: @words
  end

  # POST /words
  def create
    word = params[:input_word]
    book_title = params[:from_book]

    @word = Word.new(word_params)

    if @word.save
      render json: @word, status: :created, location: words_path(@word)
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /words/1
  def destroy
    @word.destroy
  end

  def find_words
    searchTerm = params[:word]

    @words = Word.where("word ILIKE ?", "%" + searchTerm + "%").distinct.limit(3)

    render json: @words
  end
  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_word
      @word = Word.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def word_params
      params.permit(:from_book, :word)
    end
end
