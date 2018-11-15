# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :username, length: { minimum: 6 }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :playlists,
  foreign_key: :creator_id,
  class_name: :Playlist


  def self.find_by_credentials(username, password)
    user = self.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.update(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def generate_unique_session_token
    self.session_token = self.class.generate_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
