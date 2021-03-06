class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?, :current_song

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @user = User.find_by(session_token: session[:session_token])
    # @user ? @user.includes(:like_songs, :like_albums, :like_artists, playlists:[:creator, :songs]) : nil
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_song(user)
    user.current_song_id ? Song.find(user.current_song_id) : nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
