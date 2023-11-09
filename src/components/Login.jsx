import React from 'react'
import styled from 'styled-components'

export default function Login () {
  const handleClick = () => {
    const clientID = 'e19959f9c5d741f9bacc1a8dae49c7d3'
    const redirectURL = 'http://localhost:3000/'
    const apiURL = `https://accounts.spotify.com/authorize`
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played'
    ];
    window.location.href = `${apiURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope.join()}&response_type=token&show_dialog=true`;
  }

  return (
    <LoginContainer>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='Spotify'
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  gap: 15rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    background-color: #1db954;
    border-radius: 50px;
    border: none;
    font-size: 1.5rem;
    color: #fff;
  }
  button:hover {
    background-color: #1ed760;
    cursor: pointer;
  }
`
