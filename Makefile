
bin = ./node_modules/.bin/

test:
	@${bin}mocha \
		--harmony-generators \
		--bail

.PHONY: test