FROM node:20.10.0-bookworm

WORKDIR /root/project

# RUN yarn global add @vue/cli

# RUN --mount=type=bind,source=./project/package.json,target=package.json,readwrite \
#     --mount=type=bind,source=./project/yarn.lock,target=yarn.lock,readwrite \
#     --mount=type=cache,target=/root/.yarn \
#     yarn install 

CMD tail -f /dev/null