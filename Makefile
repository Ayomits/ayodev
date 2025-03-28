dev:
	yarn dev
test:
	yarn build:docs
	yarn types:check
	yarn format:fix
	yarn eslint:fix
	yarn build