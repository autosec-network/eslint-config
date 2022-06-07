# `@autosec-network/eslint-config`

## Usage

### `.eslintrc`

```jsonc
{
	// ...
	"extends": [
		// ...
		"@autosec-network/eslint-config"
		// "@autosec-network/eslint-config/cloudflare.eslintrc",
		// "@autosec-network/eslint-config/google.eslintrc",
		// ...
	]
	// ...
}
```

## Setup

### During development

1. Make sure to include the `.npmrc` file into the root of project
2. Generate new [Personal access token](https://github.com/settings/tokens/new)
3. Login to `npm`

```bash
$ npm login --scope=@autosec-network --registry=https://npm.pkg.github.com

> Username: GITHUB-USERNAME
> Password: TOKEN
> Email: PUBLIC-GITHUB-EMAIL-ADDRESS
```

4. Install via NPM

```bash
$ npm i -D @autosec-network/eslint-config
```

### During CI

```yaml
- uses: actions/setup-node@v3
  with:
    # ...
	registry-url: https://npm.pkg.github.com/
# Skip post-install scripts here, as a malicious script could steal NODE_AUTH_TOKEN.
- run: npm ci --ignore-scripts
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
# `npm rebuild` will run all those post-install scripts for us.
- run: npm rebuild && npm run prepare --if-present
```
