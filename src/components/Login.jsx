import React from 'react';
import styled from 'styled-components';

const handleClick = () => {
    const clientId = "522dbb3877114d89a46e0eab21de0ef5";
    const redirectUri = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = ['user-read-email', 'user-read-private', 'user-modify-playback-state', 'user-read-playback-state','user-read-currently-playing', 'user-read-recently-played', 
    'user-read-playback-position',
    'user-top-read'];
    window.location = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
}
export default function Login() { 
    return (
        <Container>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="Spotify" />
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #1db954;
gap: 5rem;
img{
    height:20vh;
}
button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color:black;
    color:#49f585;
    font-size: 1.4rem;
    cursor: pointer;
}
`;