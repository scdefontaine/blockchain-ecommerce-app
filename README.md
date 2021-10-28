# Blockchain Ecommerce App

# Requirements
Smart Contracts
- Solidity
- Truffle
- Ganache
- Metamask

Backend API
- Koa
- NodeJS

Frontend UI
- Reactjs

# Deploy Smart Contract
From root directory,
1) npm install
2) npm install truffle
3) Install ganache from https://www.trufflesuite.com/docs/ganache/overview
4) truffle develop
5) from truffle bash shell, run 'migrate --reset'

# Start up a local mondo db instance using docker
docker run -d --name mongodb-blockchain -e MONGO_INITDB_DATABASE=blockchain-ecommerce -p 27017:27017 mongo:latest

# Backend Koa NodeJS API
From ./backend,
1) npm install && node server.js

# Frontend React App
From ./frontend,
1) npm install && npm start
