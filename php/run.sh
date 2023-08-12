#!/bin/bash
#
# Podman php.

podman run -it -d \
	-p 8000:8000 \
	-v $HOME/Projects/php/code:/usr/src/code:rw \
	--userns keep-id:uid=999,gid=999 \
	--network podman \
	--name hotal \
	php:hotal
