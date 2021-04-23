class WordsController < ApplicationController
  before_action :set_word, only: [:show, :update, :destroy]

  # GET /words
  def index
    @words = Word.all.order("id DESC")

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
  
  def upload_file
    path = File.new(params[:file]).path

    data = []

    file = File.open(path, "r") do |f|
        f.each_line do |line|
            data.push(*line.split.map(&:to_s))
        end
    end

    # Seed database with the unique words from the book
    data.uniq.each do |word|
        word = word.gsub(/[[:punct:]]/, '')
        begin
            Word.create!(
                :word => word,
                :from_book => ""
            )
        rescue StandardError => e
            puts "Rescued word: (#{word}) - #{e.inspect}"
            next
        end
    end
    index()
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_word
      @word = Word.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def word_params
      params.permit(:from_book, :word, :file)
    end
end
