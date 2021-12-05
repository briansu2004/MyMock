FROM node:14-alpine

RUN npm install -g @mockoon/cli@1.3.0
COPY api_export.json ./data.json

#RUN npm install -g curl

## The following is a test js for mockoon-cli running processes
#RUN npm install request
#COPY test_mockoon.js ./test_mockoon.js

# Build runner script
#RUN echo "mockoon-cli start \"\$@\" -d ./data.json -l 127.0.0.1; sleep infinity & wait \$!" > mockoon-runner.sh
#RUN echo "mockoon-cli start \"\$@\" -d ./data.json; sleep infinity & wait \$!" > mockoon-runner.sh
#
## Use this to beat 127.0.0.1
RUN echo "mockoon-cli start \"\$@\" -d ./data.json -l 0.0.0.0; sleep infinity & wait \$!" > mockoon-runner.sh

# Do not run as root.
RUN adduser --shell /bin/sh --disabled-password --gecos "" mockoon
RUN chown -R mockoon ./mockoon-runner.sh
RUN chown -R mockoon ./data.json
USER mockoon

#USER node

EXPOSE 3000

#ENTRYPOINT sh mockoon-runner.sh
CMD ["sh", "mockoon-runner.sh"]
# Usage: docker run -p <host_port>:<container_port> mockoon-test