ARG NODE_VERSION=24-alpine3.21
ARG DIR=/project
ARG PORT=3002
ARG ALPINE_VERSION=3.21

#################  stage 1 #################
#                                          #
#                 BASE                     #
#                                          #
# ##########################################

FROM node:${NODE_VERSION} AS base
ARG DIR
WORKDIR ${DIR}

COPY package*.json .

RUN npm i

#################  stage 2 #################
#                                          #
#                 BUILD                    #
#                                          #
# ##########################################

FROM base AS build
ARG DIR

COPY . .

RUN npm run build
RUN apk add --no-cache wget curl

RUN npm ci
