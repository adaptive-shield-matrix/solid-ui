#!/bin/bash
set -e

bun run build
rsync -avh --delete public-images/ out/images/
bun run upload
git branch -f deployed
