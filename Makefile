REPORTER = spec

test-unit:
	@./node_modules/.bin/mocha --harmony \
		--reporter $(REPORTER) \
		server/test/unit/helpers/globals.js \
		server/test/unit/*.test.js

test-integration:
	@./node_modules/.bin/mocha --harmony \
		--reporter $(REPORTER) \
		server/test/integration/helpers/globals.js \
		server/test/integration/helpers/server.js \
		server/test/integration/events.test.js

test: test-unit test-integration

clean:
	rm -rf build components

.PHONY: clean build