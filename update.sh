#!/bin/bash

libraries=(
  "electron@27.0.3"
  "redux@4.2.1"
  "@reduxjs/toolkit@1.9.7"
  "react-redux@8.1.3"
  "react-router@6.18.0"
  "react-router-dom@6.18.0"
  "i18next@23.6.0"
  "react-i18next@13.3.1"
  "redux-first-history@5.1.1"
  "@babel/core@7.23.2"
  "@babel/plugin-transform-react-jsx@7.22.15"
  "@babel/preset-env@7.23.2"
  "@babel/preset-react@7.22.15"
  "@babel/preset-typescript@7.23.2"
  "typescript@5.2.2"
  "webpack@5.89.0"
  "webpack-cli@5.1.4"
  "webpack-dev-server@4.15.1"
  "webpack-merge@5.10.0"
  "babel-loader@9.1.3"
  "css-loader@6.8.1"
  "css-minimizer-webpack-plugin@5.0.1"
  "html-loader@4.2.0"
  "html-webpack-plugin@5.5.3"
  "mini-css-extract-plugin@2.7.6"
  "mocha@10.2.0"
  "electron-builder@24.6.4"
)

for library in "${libraries[@]}"
do
  npm install "$library" --save-exact
done
