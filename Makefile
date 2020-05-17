default: run

run:
	npm start

build:
	PUBLIC_URL=https://www.spiceroo.com/ npm run build

deploy:
	PUBLIC_URL=https://www.spiceroo.com/ npm run build
	netlify deploy --prod

setup:
	npm i webpack webpack-cli html-webpack-plugin html-loader prop-types --save-dev
	npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
	npm i sass-loader node-sass css-loader style-loader url-loader --save-dev
	npm i react-hot-loader @hot-loader/react-dom --save-dev
	npm audit fix

all:
	$(MAKE) setup
	PUBLIC_URL=https://www.spiceroo.com/ npm run build