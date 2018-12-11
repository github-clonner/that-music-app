class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all.includes(:songs)
  end

  def show
    @playlist = Playlist.find(params[:id])
    @playlist_song_ids = @playlist.songs.map { |song| song.id }
    @creator = User.find(@playlist.creator_id)
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      @playlist_song_ids = @playlist.songs.map { |song| song.id }
      @creator = User.find(@playlist.creator_id)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render json: ["Removed from your library"]
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :creator_id, :image)
  end

end
