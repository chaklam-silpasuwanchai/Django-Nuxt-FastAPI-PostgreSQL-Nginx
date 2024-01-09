FROM node:20.10.0-bookworm

WORKDIR /root/project

# RUN yarn global add @vue/cli

RUN --mount=type=bind,source=./package.json,target=package.json,readwrite \
    --mount=type=bind,source=./yarn.lock,target=yarn.lock,readwrite \
    --mount=type=cache,target=/root/.yarn \
    # For pinia crash when add to the package
    yarn install ; exit 0

COPY . .

RUN yarn upgrade
RUN yarn build

# CMD node .output/server/index.mjs
CMD tail -f /dev/null